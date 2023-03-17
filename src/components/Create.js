import React, { useState } from 'react'

export const Create = () => {

  const titleComponent = "Add Movies";

  const [movieState, setMovieState] = useState({
    title: '',
    description: ''
  })

  const { title, description } = movieState;

  const getFormData = e => {
    e.preventDefault()

    //get data form
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //Create object movie 

    let movie = {
      id: new Date().getTime(),
      title,
      description
    };

    //save state
    setMovieState(movie)

    //save into local storage
    saveIntoStorage(movie)
  }

  const saveIntoStorage = movie => {

    //get the elements that we already have in the localstorage
    let items = JSON.parse(localStorage.getItem("movies"));

    console.log(items)

    //check if it is an array
    if (Array.isArray(items)) {
      // add into the array a new item
      items.push(movie);
    } else {
      // crate array with the new movie
      items = [movie];
    }

    // save into localStorage
    localStorage.setItem("movies", JSON.stringify(items));

    //return object
    return movie;
  
  }

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <strong>
        {title && description && "You have create the movie: " + title}
      </strong>

      <form onSubmit={getFormData}>
        <input type="text" id="title" name="title" placeholder="Title" />
        <textarea
          id="description"
          name="description"
          placeholder="description"
        ></textarea>
        <input type="submit" id="save" value="Save" />
      </form>
    </div>
  );
}
