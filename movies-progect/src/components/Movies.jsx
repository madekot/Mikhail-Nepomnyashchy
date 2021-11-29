import React from 'react';
import { Movie } from '../components/Movie';

function Movies({films}) {
  const movies = films.map((film) => {
    const {id, ...props} = film;
    return <Movie key={id} {...props}/>
  })

  return <div className="movies">{movies}</div>;
}

export {Movies};
