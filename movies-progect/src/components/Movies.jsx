import React from 'react';
import { Movie } from '../components/Movie';
import { Preloader } from '../components/Preloader';

function Movies({films}) {
  if (!films) {
    return <Preloader />
  }
  
  const movies = films.map((film) => {
    const {id, ...props} = film;
    return <Movie key={id} {...props}/>
  })

  return <div className="movies">{movies}</div>;
}

export {Movies};
