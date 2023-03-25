import React from 'react'

export const Edit = ({movie, addMovies, setEdit, setListState}) => {

  const title_component = "Edit Movie";


//   Innanzitutto, la funzione prende due parametri:

//     "e" rappresenta l'evento click (in questo caso, il click sul pulsante "salva" per salvare le modifiche apportate al film).
//     "id" rappresenta l'ID del film che si sta modificando.

// La prima cosa che fa la funzione è chiamare il metodo "preventDefault()" dell'evento, il che impedisce al browser di effettuare l'azione predefinita associata all'evento (in questo caso, il browser non eseguirà il submit del form quando si clicca sul pulsante "salva").

// Successivamente, la funzione recupera l'elemento target dell'evento (cioè il pulsante "salva" che è stato cliccato).

// Poi, viene chiamata la funzione "addMovies()" per recuperare l'elenco di tutti i film salvati e lo si assegna ad una variabile chiamata "movies_saved".

// Successivamente, viene utilizzata la funzione "findIndex()" per cercare l'indice del film che ha l'ID corrispondente a quello passato come parametro "id". Se l'ID esiste nella lista, "findIndex()" restituirà l'indice del film nella lista.

// Dopodiché, viene creato un nuovo oggetto "movie_updated" con l'ID del film e i campi "title" e "description" aggiornati con i valori inseriti dall'utente nel form.

// Poi, l'elemento nella lista di film salvati corrispondente all'indice trovato in precedenza viene aggiornato con il nuovo oggetto "movie_updated".

// Infine, viene utilizzato il metodo "setItem()" dell'oggetto "localStorage" per salvare la nuova lista di film aggiornata in localStorage, con la chiave "movies".

// Infine, due funzioni di React vengono chiamate:

//     "setListState(movies_saved)" imposta lo stato di una lista di film con l'elenco di film salvati, per aggiornare la visualizzazione della lista di film nell'interfaccia utente.
//     "setEdit(0)" imposta lo stato dell'elemento "edit" a zero, il che indica che l'utente ha finito di modificare il film e può tornare alla visualizzazione della lista di film.

  const saveEdit = (e, id) => {
    e.preventDefault();
    
    let target = e.target;
    
    const movies_saved = addMovies();
    const index = movies_saved.findIndex(movie => movie.id === id);
    

    let movie_updated = {
      id,
      title: target.title.value,
      description: target.description.value,
    };


    movies_saved[index] = movie_updated;

    localStorage.setItem('movies', JSON.stringify(movies_saved));


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
