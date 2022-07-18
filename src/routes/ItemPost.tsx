
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { baseURL} from './Blog';


const ItemPost = () => {
 
    const params = useParams();
    const {data,error,loading}:any= useFetch(`${baseURL}/${params.id}`);
    
    if(loading){
        return <h2>Loading...</h2>
      }
      if(error!==''){
        return <h2> {error}  </h2>
      }
      
    
    
    return (
    <>
        <h1>{data.id}-{data.title}</h1>
        <p> {data.body}            </p>
    </>
  )
}

export default ItemPost