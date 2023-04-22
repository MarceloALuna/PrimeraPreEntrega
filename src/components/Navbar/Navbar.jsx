import { Categorias } from "./Categorias/Categorias";
import { CartWidget } from "../CartWidget/CartWidget";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
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