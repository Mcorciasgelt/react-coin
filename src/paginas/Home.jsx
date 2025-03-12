/* El componente `Home` es el componente principal de nuestra aplicación. 
Este componente muestra la lista de las principales criptomonedas del mercado. 
Para ello, hace una petición a la API de CoinCap y muestra la información de las criptomonedas en una lista. 
Cada elemento de la lista es un enlace a la ruta `/coin/:id`, donde `:id` es el identificador de la criptomoneda. */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [coins, setCoins] = useState([])

    useEffect(() => {

        const coinFetch = async () => {
            
            try {
                const response = await fetch("https://api.coincap.io/v2/assets")
    
                if (!response.ok) {
                    throw new Error("Error al conectar con el API")
                }
    
                const data = await response.json()
                console.log(data);

                setCoins(data.data)
                
            } catch (error) {
                console.error(`Error en la conexión`, error);
                
            }
        }
        
        coinFetch()
        },[])


    return (
        <>
        <h1>Criptomonedas</h1>
        <ul>
            {coins.map((coin) => (
                <li key={coin.id}>
                    <Link to={`/coins/${coin.id}`}>{coin.name} ({coin.symbol})</Link>
                </li>
            ))}
        </ul>
        </>    
    )
}

export default Home