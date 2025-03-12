/* url: [https://api.coincap.io/v2/assets/](https://api.coincap.io/v2/assets/) */

// hacemos la función con el Fetch para traer la información

/* import { useEffect } from 'react'


function App() {

    useEffect(() => {

    const coinFetch = async () => {
        
        try {
            const response = await fetch("https://api.coincap.io/v2/assets")

            if (!response.ok) {
                throw new Error("Error al conectar con el API")
            }

            const data = await response.json()
            console.log(data);
            return data
            
        } catch (error) {
            console.error(`Error en la conexión`, error);
            
        }
    }
    
    coinFetch()
    })

    return data

}


export default App; */