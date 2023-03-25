import React from 'react'

export const Edit = ({movie, addMovies, setEdit, setListState}) => {

  const title_component = "Edit Movie";

  const saveEdit = (e, id) => {
    e.preventDefault();
    
    let target = e.target;
    
    const movies_saved = addMovies();
    const index = movies_saved.findIndex(movie => movie.id === id);
    
    //crear un objeto con ese id de ese indice, con titulo y description del formulario
    let movie_updated = {
      id,
      title: target.title.value,
      description: target.description.value,
    };

    //Actualizar el elemento con ese indice
    movies_saved[index] = movie_updated;

    //Guardar el nuevo array de objectos en el LocalStorage
    localStorage.setItem('movies', JSON.stringify(movies_saved));

    //actualizar estados
    setListState(movies_saved);
    setEdit(0);
  }

  return (
    <div>
      <h3 className='title'>{title_component}</h3>
      <form className='edit_form' onSubmit={e => saveEdit(e, movie.id)}>
        <input
          type="text"
          name="title"
          className='edit_title'
          defaultValue={movie.title} />
        <textarea
          name='description'
          defaultValue={movie.description}
          className='edit_description' />
        <input type='submit' className='edit' value='Update' />
      </form>
    </div>
  )
}
