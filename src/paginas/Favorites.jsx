/* El componente `Favorites` muestra la lista de criptomonedas favoritas. 
Para ello, obtiene la lista de favoritos del `localStorage` del navegador y muestra la información de las criptomonedas en una lista. 
Cada elemento de la lista es un enlace a la ruta `/coin/:id`, donde `:id` es el identificador de la criptomoneda. 
Si no hay criptomonedas favoritas, muestra un mensaje indicando que no hay criptomonedas favoritas.

recordamos la estructura del localStorage para guardar:

```bash
localStorage.setItem('clave', 'valor') */

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favorites() {
   const [favoriteId, setFavoriteId] = useState([])
   const [allCoins, setAllCoins] = useState([])

   useEffect(() => {
      const storedFavorite = JSON.parse(localStorage.getItem('favorites')) || []
      setFavoriteId(storedFavorite)
      
      const coinFetch = async () => {
         try {
            const response = await fetch("https://api.coincap.io/v2/assets")
            if (!response.ok) {
               throw new Error("Error al conectar con el API")               
            }
            const data = await response.json()
            setAllCoins(data.data)
         } catch (error) {
            console.error(`Error en la conexión`, error)            
         }
      }
      coinFetch()
   }, [])

   const favoriteCoins = allCoins.filter((coin) => favoriteId.includes(coin.id))

   return (
     <>
      <h1>Criptomonedas favoritas</h1>       
      {favoriteCoins.length === 0 ? (
         <p>No hay criptomonedas favoritas</p>
      ) : (
         <ul>
            {favoriteCoins.map((coin) => (
               <li key={coin.id}>
                  <Link to={`/coins/${coin.id}`}>{coin.name} ({coin.symbol})</Link>
               </li>
            ))}
         </ul>
      )}
     </>
   )
}
   
export default Favorites