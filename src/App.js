import React from 'react'
import './App.css'
import Row from './Components/Row'
import API from './API/Api'
import Banner from './Components/Banner'
import Nav from './Components/Nav'

const App = () => {

	return (
		<div className='app'>
			{/* Nav bar */}
			<Nav/>
			{/* Banner */}
			<Banner/>

			{/* All rows according to these category */}
			<Row title='NETFLIX ORIGINALS' isLargeRow={true} fetchUrl={API.fetchNetflixOriginals}/>
			<Row title='Trending Now' fetchUrl={API.fetchTrending}/>
			<Row title='TopRated' fetchUrl={API.fetchTopRated}/>
			<Row title='Action Movies' fetchUrl={API.fetchActionMovies}/>
			<Row title='Comedy Movies' fetchUrl={API.fetchComedyMovies}/>
			<Row title='Horror Movies' fetchUrl={API.fetchHorrorMovies}/>
			<Row title='Romance Movies' fetchUrl={API.fetchRomanceMovies}/>
			<Row title='Documentaries' fetchUrl={API.fetchDocumentaries}/>
			
		</div>
	)
}

export default App
