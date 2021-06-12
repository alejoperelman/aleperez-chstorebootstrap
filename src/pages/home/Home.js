import { NavBarAp } from '../../components/navBarAp/NavBarAp'
import { ItemListContainer } from '../../components/itemListContainer/ItemListContainer'
import './Home.css';

export function Home() {
  
  const fullname =  "Ale Perez"

  return (
    <div className="App">
      <NavBarAp user={fullname} />
      <ItemListContainer />
    </div>
  )
}