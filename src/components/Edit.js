import React from 'react'

export const Edit = ({movie}) => {

  const title_component = "Edit Movie";

  return (
    <div>
      <h3 className='title'>{title_component}</h3>
      <form className='edit_form'>
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
