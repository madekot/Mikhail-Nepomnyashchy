import { Movies } from '../components/Movies';
import { Radio } from '../components/Radio';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

function Main(props) {
  const { films, search, loading, onChangeSearch, onChangeType } = props;
  const filmsConten = loading ? <Preloader /> : <Movies films={films} />;

  return (
    <main className="container content">
      <Search search={search} onChangeSearch={onChangeSearch} />
      <Radio onChangeType={onChangeType} />
      {films.length ? filmsConten : <h4>Nothing found</h4>}
    </main>
  );
}

export { Main };
