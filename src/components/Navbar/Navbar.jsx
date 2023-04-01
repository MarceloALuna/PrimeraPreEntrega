import { CartWidget } from "../CartWidget/CartWidget"
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand"href="VIVERO">Vivero Doña Luna</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="Suculentas">Suculentas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="Cactus">Cactus</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="Herramientas">Herramientas</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <CartWidget cantCarrito={6} className="btn btn-outline-success"/>
            </div>
        </div>
    </div>
</nav>
   )
}