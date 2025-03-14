/* El componente `Coin` muestra información detallada sobre una criptomoneda en particular. Para ello, 
hace una petición a la API de CoinCap y muestra la información de la criptomoneda en un formato más detallado.

url de ejemplo: [https://api.coincap.io/v2/assets/bitcoin](https://api.coincap.io/v2/assets/bitcoin) */

/* Dentro de coin se muestra un botón para añadir o quitar la criptomoneda de la lista de favoritos. 
Esta lista se guarda en el `localStorage` del navegador con el nombre `favorites`.
Se puede guardar solo el id de la criptomoneda o el objeto completo */

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Coins() {
   const { id } = useParams()
   const [coin, setCoin] = useState(null)
   const [favorite, setFavorite] = useState(false)

   useEffect(() => {
      const storedFavorite = JSON.parse(localStorage.getItem('favorites')) || []
      if (storedFavorite.includes(id)) {
         setFavorite(true)
      }
   })

   useEffect(() => {
      const coinFetch = async () => {
         try {
            const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
            if (!response.ok) {
               throw new Error("Error al conectar con el API")               
            }
            const data = await response.json()
            setCoin(data.data)
         } catch (error) {
            console.error(`Error en la conexión`, error)            
         }
      }      
      coinFetch()
   }, [id])

   if (!coin) return <p>La información no está disponible</p>

   const handleFavoriteBtn = () => {
      let storedFavorite = JSON.parse(localStorage.getItem('favorites')) || []
      if (favorite) {
         storedFavorite = storedFavorite.filter((favId) => favId !== id)
         setFavorite(false)
      } else {
         storedFavorite.push(id)
         setFavorite(true)
      }
      localStorage.setItem('favorites', JSON.stringify(storedFavorite))
   }
   
   return (
      <>
         <div className="crypto-info">
            <h1>{coin.name} ({coin.symbol})</h1>
            <p>Rank: {coin.rank}</p>
            <p>Precio (USD): ${Number(coin.priceUsd).toFixed(2)}</p>
            <p>Market Cap: ${Number(coin.marketCapUsd).toFixed(2)}</p>
            <p>Volumen 24h: ${Number(coin.volumeUsd24Hr).toFixed(2)}</p>
            <p>Cambio 24h: {Number(coin.changePercent24Hr).toFixed(2)}%</p>
            <a href={coin.explorer}>{coin.name}</a>
            <div className="favorite-btn">
               <button onClick={handleFavoriteBtn}>
                  {favorite ? 'Eliminar de favoritos' : 'Añadir a favoritos'}
               </button>
            </div>
         </div>
      </>
   )
}
export default Coins