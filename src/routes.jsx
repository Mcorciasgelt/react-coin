/* - La subruta `/` renderizará el componente `Home`. Este componente mostrará la lista de las principales criptomonedas del mercado.

  - La subruta `/coin/:id` renderizará el componente `Coin`. Este componente mostrará información detallada sobre una criptomoneda en particular.

  - La subruta `/favorites` renderizará el componente `Favorites`. Este componente mostrará la lista de criptomonedas favoritas. (Esta se creará como BONUS) */

import { createBrowserRouter } from "react-router-dom";
import Home from "./paginas/Home"
import Coins from "./paginas/Coins"
import Favorites from "./paginas/Favorites"
import Root from "./components/Root"

const router = createBrowserRouter([
    {path: "/", element: <Root />, children: [
        { path: "/", element: <Home /> },
        { path: "/coins/:id", element: <Coins /> },
        { path: "/favorites", element: <Favorites /> },
    ]
    }]
)

export default router