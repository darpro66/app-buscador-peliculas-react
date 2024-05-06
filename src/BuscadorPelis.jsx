 
       
   import { useState } from "react"

 
 
 export const BuscadorPelis = () => {

  const urlBase ='https://api.themoviedb.org/3/search/movie'
  const API_KEY = '481809ea509a78fc28389c2552f6f2cf'

 const [busqueda, setBusqueda] = useState('')
 const [peliculas, setPeliculas] = useState([])
 




 //'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY'




 const handleInputChange = (e) =>{
  setBusqueda(e.target.value)
 }
  
 const handleSubmit = (e) =>{
  e.preventDefault()
  fetchPeliculas()

 }


const fetchPeliculas = async () =>{
  try{
   
    const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
    const data = await response.json()
    console.log(data.results)
      setPeliculas(data.results)
  }catch(error){
            console.error('ocurrio un error: ', error)

  }
}

   return (
    
     <div className="container"> 

        <h1 className="title"> buscador de peliculas </h1>

         <form onSubmit={handleSubmit}>
          <input type="text" 
           placeholder="nombre de tu pelicula"
           value={busqueda}
           onChange={handleInputChange}
          />
          <button type="submit" className="search-button">buscar</button>
         </form>

         <div className="movie-list">
          {peliculas.map( (pelicula) => (
                 <div key={pelicula.id} className="movie-card">
                 <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                 <h2>{pelicula.title}</h2>
                 <p>{pelicula.overview}</p>
                </div>
           
        
      ))}
        

         </div>
        

     </div>
   )
 }
   




// `]]][[``]]`

/* ?query=Jack+Reacher&api_key=API_KEY=481809ea509a78fc28389c2552f6f2cf*/




//acf5472e45e36d5026bfd4c5e792981