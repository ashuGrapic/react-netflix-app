import React, { useState, useEffect,memo } from 'react'
import axios from '../API/axios'
import './CSS/Row.css'
import Skeleton from '@material-ui/lab/Skeleton';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [trailerUrl, setTrailerUrl] = useState('')

    // defining the base URL for image poster
    const baseUrl = 'https://image.tmdb.org/t/p/original'
    // a snipet code based on specific condition
    useEffect(() => {
        async function getMovieData() {
           await axios.get(fetchUrl)
                .then(request => {
                    setMovies(request.data.results)
                    setLoading(false)
                })
                .catch(error => {
                    setLoading(true)
                })
        }
        getMovieData();
    })

    // getting movie id to play an video
    const GetMovie = movie => {
        
       trailerUrl 
        ? setTrailerUrl('')
        : movieTrailer(movie?.name || '')
        .then(url=>{
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'))
        })
        .catch(error => { console.log(error) })
    }
// defining a youtube player style
    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        },
    }
    return (
        <div className='row'>

            {/* Movies Title */}
            <h2>{title}</h2>
            {/* poster container */}
            <div className="row__posters">
                {
                    loading ? (
                        <Skeleton variant="rect" width='100%' height={118} />
                    ) :
                        (
                            /*parsing movie data*/
                            movies.map(movie => (
                                <img className={`row__poster ${isLargeRow && 'row__posterLarge'}`} key={movie.id} src={`${baseUrl}${isLargeRow ? (movie.poster_path) : (movie.backdrop_path)}`} alt={movie.name} onClick={() => GetMovie(movie)} />

                            ))
                            /*end parsing movie data*/
                        )
                }
            </div>
            {/* playing perticular trailer after clicking that poster */}
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default memo(Row)
