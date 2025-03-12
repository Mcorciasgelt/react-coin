import { Outlet, Link  } from "react-router-dom";

const Root = () => {
    return (
        <>
            <nav>
                <h1>Página de Cryptos</h1>
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>

                </ul>

            </nav>
            <Outlet />
        
        </>
    )
}

export default Root