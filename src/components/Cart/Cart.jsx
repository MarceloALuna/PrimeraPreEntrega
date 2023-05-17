import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <div className="row container-fluid">
                            <h1 className="row">Carrito Vacio</h1>
                            <button className="btn btn-dark"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>
                        </div>
                    </>
                    :
                    <div className="cart">
                        <div className="container cartContainer">
                            {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                        </div>
                            <div className="cartButtons ">
                                <h2><span>Resumen de la compra: ${totalPrice()}</span></h2>
                                <button className="btn btn-danger mb-2" onClick={() => emptyCart()}>Vaciar Carrito</button>
                                <Link className="nav-link mb-3" to={"/"}><button className="btn btn-dark">Continuar Comprando</button></Link>
                                <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                             </div>
                        
                    </div>

            }


        </>
    )
}