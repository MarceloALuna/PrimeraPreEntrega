import './App.css'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  return (
    <div id="divGeneral" >
      <Navbar />
      <ItemListContainer greeting={"Productos"} />
    </div>
  )
}
