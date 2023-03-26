import React, { useState } from 'react'

export const Searcher = ({listState, setListState}) => {

  const [search, setSearch] = useState('');
  const [noFind, setNoFind] = useState(false);

  const searchMovie = (e) => {
    //crear estado y actualizarlo
    setSearch(e.target.value);

    //filtrar para buscar coincidencias
    let movie_finded = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    });
    
    if (search.length <= 1 || movie_finded <= 0) {
      movie_finded = JSON.parse(localStorage.getItem('movies'));
      setNoFind(true);
    } else {
      setNoFind(false);
    }


   

    //actualizar estado del listado principal con lo que lografo filtrar
    setListState(movie_finded)
  }

  return (
    <div className="search">
      <h3 className="title">Searcher: {search}</h3>
      {(noFind === true && search.length >= 1) && (
        <span className="no-find">
          No se ha encontrado ninguna coincidencia
        </span>
      )}
      <form>
        <input
          type="text"
          id="search_field"
          name="search"
          autoComplete="off"
          value={search}
          onChange={searchMovie}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
