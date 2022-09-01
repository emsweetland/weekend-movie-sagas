import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'

function MovieDetail() {
    const history = useHistory();
        const dispatch = useDispatch();
    const thisMovie = useSelector(store => store.thisMovie);



// show movie genres
// movie title
// movie description
// and movie poster
// use sagas and redux to handle the requests


//add a back to list button,
// which should bring user to
// the home/list page

    return (
        <main>
            <h1>MovieList</h1>
            <p>{thisMovie.title}</p>
            <p>{thisMovie.description}</p>
            <img src={thisMovie.poster}></img>
            <ul>
                {thisMovie.genres?.map(movie => {
                    
                    return (<li key={movie}>{movie}</li>)
                
    }    )}
            </ul>

        <button onClick= {()=> history.push('/')}> GO BACK </button>

        </main>

    );
}

export default MovieDetail;