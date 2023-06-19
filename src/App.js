import { useEffect, useState } from "react";

//useEffect() hook accepts two arguments which are function, depencies
function App() {
  const [users, setUsers] = useState();
  const [callUseEfect, setCallUseEffect] = useState();
  //Async await 
  const getUsers = async()=> {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
    const data = await response.json();
    setUsers(data)
    }else{
      console.log('Not found!')
    }
    } catch (error) {
      console.log('Something went wrong! ', error)
    }
  }

  useEffect(()=>{
    getUsers();
    console.log('If users state is changed, I will be called')
  },[callUseEfect])



  return (
    <div className="App" style={{display:'flex', flexWrap:'wrap', columnGap: '15px'}}>
      {
        users?.map(user => {
          return <div key={user.id} style={{border: 'solid maroon 1px', margin: '10px 0', width: '250px', padding: '15px', borderRadius: '10px'}}>
            <h4>Name : {user.name}</h4>
            <h4>Email: {user.email}</h4>
            </div>
        })
      }
    </div>
  );
}

export default App;
