/* El componente `Favorites` muestra la lista de criptomonedas favoritas. 
Para ello, obtiene la lista de favoritos del `localStorage` del navegador y muestra la información de las criptomonedas en una lista. 
Cada elemento de la lista es un enlace a la ruta `/coin/:id`, donde `:id` es el identificador de la criptomoneda. 
Si no hay criptomonedas favoritas, muestra un mensaje indicando que no hay criptomonedas favoritas.

recordamos la estructura del localStorage para guardar:

```bash
localStorage.setItem('clave', 'valor') */

function Favorites() {
    return (
       <></>
    )
   }
   
   export default Favorites