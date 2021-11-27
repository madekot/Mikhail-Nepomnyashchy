import React from 'react';
import { Movie } from '../components/Movie'

function Movies({films}) {
  let movies = <h3>Loading...</h3>
  if (films) {
    movies = films.map((film) => {
      const {imdbID: id, ...props} = film;
      return <Movie key={id} film={props}/>
    })
  }

    return <div className="movies">{movies}</div>;
}

export { Movies };
