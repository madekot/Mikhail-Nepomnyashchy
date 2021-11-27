import { Movies } from '../components/Movies'

function Main({films}) {
  return <main className='container content'>
    <Movies films={films}/>
  </main>
}

export {Main}