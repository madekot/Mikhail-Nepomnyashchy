import { Movies } from '../components/Movies'
import { Radio } from '../components/Radio';
import { Search } from '../components/Search'

function Main(props) {
  const {films, search, onChangeSearch, onChangeType} = props;
  return <main className='container content'>
    <Search search={search} onChangeSearch={onChangeSearch}/>
    <Radio onChangeType={onChangeType}/>
    <Movies films={films}/>
  </main>
}

export {Main}
