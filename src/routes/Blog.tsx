
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';

interface ItemPost{
  userId: number,
  id    : number,
  title : string,
  body  : string 
}

export const  baseURL               = 'https://jsonplaceholder.typicode.com/posts';

const Blog = () => {
  
  const [searchParams,setSearchParams]     = useSearchParams();

  
  
  const {data, error,loading}  =  useFetch(baseURL)                          ;
  
  if(loading){
    return <h2>Loading...</h2>
  }
  if(error!==''){
    return <h2> {error}  </h2>
  }
  
  const handleChange = (e: any) => {
  let filter= e.target.value;
  
  if(filter){
    setSearchParams({filter})
  }else{
    setSearchParams({})
  }
  }

  return (
    <>
    <h1>Blog</h1>
    <input type="text" className='form-control mb-2' value={searchParams.get('filter')||''}
    onChange={handleChange}
    />
    <Outlet />
   {
    

    data.filter((item:ItemPost)=>{
      let filter = searchParams.get('filter')
      if(!filter){
      return true;
      }
      let title = item.title.toLowerCase()
      return title.startsWith(filter.toLowerCase())
    })
    .map((item:ItemPost)=>(
      
      <h4 key={item.id}>
      
      <Link to={`/blog/${item.id}`}>  
      {item.id}-{item.title} 
      </Link>  
      
      </h4>
      
    ))
   }
   
    </>
  )
}

export default Blog