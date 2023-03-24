import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const List = ({listState, setListState}) => {

  //const [listState, setListState] = useState([]);

  const [edit, setEdit] = useState(0);

    useEffect(() => {
      addMovies();
    }, []);

  const addMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'));

    setListState(movies);

    return movies;
  }

  const deleteMovie = (id) => {
    // get stored movies
    let movies_stored = addMovies();
    // Filter those movies so that I eliminate the one I don't want from the array
    let new_movies_array = movies_stored.filter(movie => movie.id !== parseInt(id));

    // Update the state of the list
    setListState(new_movies_array);

    // Update data into localStorage
    localStorage.setItem('movies', JSON.stringify(new_movies_array));
  }


  return (
    <>
      {listState != null ?
            listState.map(movie => {
            return (
              <article key={movie.id} className="movi-item">
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.description}</p>
                <button className="edit" onClick={() => setEdit(movie.id)
                }>Edit</button>
                <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>

                {/* edit form  */}
                {edit === movie.id && (
                  <Edit />
                )}

              </article>
              );
            })
        
        : <h2>No movies around here</h2>
      }
    </>
  )
}
