import React, { useEffect } from 'react'

export const List = ({listState, setListState}) => {

  //const [listState, setListState] = useState([]);

    useEffect(() => {
      addMovies();
    }, []);

  const addMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'));

    setListState(movies);
  }


  return (
    <>
      {listState != null ?
            listState.map(movie => {
            return (
              <article key={movie.id} className="movi-item">
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.description}</p>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </article>
              );
            })
        
        : <h2>No movies around here</h2>
      }
    </>
  )
}
