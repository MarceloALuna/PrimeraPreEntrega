import { Link } from "react-router-dom";
import { memo } from "react";
export const Categorias = memo(() => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" to={"/"}>
                    <button className='btn btn-success'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/Suculentas"}>
                    <button className='btn btn-success'>
                        <i className="fas">Suculentas</i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/Cactus"}>
                    <button className='btn btn-success'>
                        <i className="fas">Cactus</i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/Sustratos"}>
                    <button className='btn btn-success'>
                        <i className="fas">Sustratos</i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/Herramientas"}>
                    <button className='btn btn-success'>
                        <i className="fas">Herramientas</i>
                    </button>
                </Link>
            </li>

        </ul>
    );
})