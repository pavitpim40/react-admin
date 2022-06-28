import React,{useState,useEffect} from 'react'

function FetchComponent() {
    const [user,setUsers] = useState([]);
    useEffect(()=>{
        const fetchUser = async () => {
            const response = await fetch('https://42bkk-tas.azurewebsites.net/api/Core/Users');
            const data = await response.json();
            console.log(data)
            setUsers(data);
        }
        fetchUser()
    },[])
  return (
    <div>FetchComponent</div>
  )
}

export default FetchComponent