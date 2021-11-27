import React from 'react';
import { Movie } from '../components/Movie'

function Movies({films}) {
  if (!films) {
    return <h3>Loading...</h3>
  }
  
  const movies = films.map((film) => {
    const {id, ...props} = film;
    return <Movie key={id} {...props}/>
  })

  return <div className="movies">{movies}</div>;
}

export {Movies};
