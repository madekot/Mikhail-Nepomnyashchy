import { Movies } from '../components/Movies'
import { Search } from '../components/Search'

function Main(props) {
  const {films, search, onChangeSearch} = props;
  return <main className='container content'>
    <Search search={search} onChangeSearch={onChangeSearch}/>
    <Movies films={films}/>
  </main>
}

export {Main}
