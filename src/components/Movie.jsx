import React from 'react';

function Movie({ title, poster, category, year }) {

  const style = {
    footer : {
      display: 'flex', 
      justifyContent: 'space-between'
    }
  }

  return (
    <div className="movie card" >
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} alt=""/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p style={style.footer}>
          <span>{category}</span>
          <span>{year}</span>
        </p>
      </div>
    </div>      
  )
}

export {Movie};
