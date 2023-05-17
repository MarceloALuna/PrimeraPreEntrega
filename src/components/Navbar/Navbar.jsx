import { Categorias } from "./Categorias/Categorias";
import { CartWidget } from "../CartWidget/CartWidget";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <img src="https://firebasestorage.googleapis.com/v0/b/reract-c95f1.appspot.com/o/do%C3%B1a-luna-logo3.png?alt=media&token=ad7ff584-9c1d-4bc1-83fc-63917c5e77a8" className="img-fluid" alt="" width="30" height="24" />
                <h1 className="navbar-brand">Vivero Doña Luna</h1>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Categorias />
                </div >
                <div className="d-flex">
                <CartWidget cantCarrito={0} className="btn btn-outline-success"/>
                </div>
            </div>
        </nav>

    );
}