import { NavBar } from '../../components/navBar/NavBar'
import { ItemListContainer } from '../../components/itemListContainer/ItemListContainer'
import './Home.css';





export function Home() {
  
  const fullname =  "Ale Perez"

  return (
    <div className="App">
      <NavBar user={fullname} />
      <ItemListContainer />
    </div>
  )
}