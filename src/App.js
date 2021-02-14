
import React, {useState} from 'react';

import User from './components/User';

const data = [
  {
    name:"Isa",
    description: "Gosta de Sorvete"    
  },
  {
    name:"Cintia",
    description: "Gosta de Goiaba"    
  },{
    name:"Moni",
    description: "Gosta de Mouse"    
  },
  { name:"Moni",
    description: "Gosta de Mouse"    
  }
];

const App= ()=> {
  const [users,setUsers] = useState(data);
  return (    
    <div className="App">
      {
        users.map(( User , index) => (
          <User 
          key = {index}
          name={data.name} 
          description={data.description}
          />
        ))
        }
        <form>
         
        </form>
     
    </div>
    // https://pokeapi.co/api/v2/type/5

    
  );
}

export default App;
