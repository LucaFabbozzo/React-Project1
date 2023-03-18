import React, { useState } from 'react'
import { SaveIntoStorage } from '../helpers/SaveIntoStorage';

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
    SaveIntoStorage("movies", movie);
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
