const API_KEY = process.env.REACT_APP_API_KEY;

class Services {
  beginningUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

  transformData = (data = []) => {
    return data.map((item) => {
      return {
        title: item.Title,
        poster: item.Poster,
        category: item.Type,
        year: item.Year,
        id: item.imdbID,
      }
    })
  }

  getMovies = (search) => {
    return fetch(`${this.beginningUrl}${search}&type=movie`)
      .then(response => response.json())
      .then(({Search}) => this.transformData(Search));
  }

  getSerials = (search) => {
    return fetch(`${this.beginningUrl}${search}&type=series`)
      .then(response => response.json())
      .then(({Search}) => this.transformData(Search));
  }

  getAllVideo = (search) => {
    return fetch(`${this.beginningUrl}${search}`)
      .then(response => response.json())
      .then(({Search}) => this.transformData(Search));
  }
}

export {Services}