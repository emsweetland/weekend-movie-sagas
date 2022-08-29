import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetail() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    console.log(movies.id, movies.title)
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



        </main>

    );
}

export default MovieDetail;