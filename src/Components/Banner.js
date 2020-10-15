import React, { useState, useEffect, memo } from 'react'
import API from '../API/Api'
import axios from '../API/axios'
import './CSS/Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])
    const baseUrl = 'https://image.tmdb.org/t/p/original'
    useEffect(() => {
        async function fetchData() {
             await axios.get(API.fetchNetflixOriginals)
                .then(result => {
                    setMovie(result.data.results[Math.floor(Math.random() * result.data.results.length)])
                })
                .catch(err=>console.log(err))
        }
        fetchData()
    }, [])

    function truncatedata(str, n) {

        return str?.length > n ? `${str.slice(0, n)}...` : str
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
                backgroundPosition: 'center center',
                width: '100%',
                // height: 'auto'
            }}
        >
            <div className="banner__contents">

                {/* Movie title */}
                <h1 className='banner__title'> {movie?.title || movie?.name || movie?.original_name}</h1>


                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <div className="banner__description">

                    <h1>{truncatedata(movie?.overview, 150)}</h1>

                </div>
            </div>
            <div className="banner--fadeBottom">

            </div>
        </header>
    )
}

export default memo(Banner)
