import { useEffect, useState } from "react"


export const useFetch = (url:string) => {
    
    const [data   , setData     ] = useState(  [] );
    const [error  , setError    ] = useState(  '' );
    const [loading, setLoading  ] = useState(false);
    
    useEffect(() => {
      
    setLoading(true)

    fetch(url)
             .then   (  respuesta=>respuesta.json()               )
             .then   (    data   =>setData   (data)               )
             .catch  (     e     =>setError  ('Error de servidor'))
             .finally(    ()     =>setLoading(false)              )      
    } , [url] )
    

    return { data, error, loading }
    
}
