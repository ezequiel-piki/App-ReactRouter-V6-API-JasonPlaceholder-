import { createContext, useState } from 'react'

export const UserContext:any = createContext('');

const UserProvider = ({children}:any) => {
    const [user,setUser]:any = useState(false);  

    const signIn =  ()=>setUser(true);
    const signOut = ()=>setUser(false);

    return (

    <UserContext.Provider value={{user,signIn,signOut}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserProvider