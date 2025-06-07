import "./App.css";
import Friends from "./Friends";
import BillSplit from "./BillSplit";
import { useState } from "react";

const friends = ["Clark", "Sarah", "Anthony", "Jane"];

function App() {
  const [selected, setSelected] = useState('');

  function userSelect(name) {
    setSelected(name === selected ? '':name);
  }

  return (
    <div className="App">
      <div>
        {friends.map((item, index) => (
          <Friends buttonText={selected === item ? 'close' : 'select'} className={selected === item ? 'friends active' : 'friends'} onClick={()=>userSelect(item)} key={index} name={item} />
        ))}
      </div>
      {selected ? 
        <>
        <BillSplit selectedUser={selected}></BillSplit>
        </>
        :
        ''
      }
    </div>
  );
}

export default App;
