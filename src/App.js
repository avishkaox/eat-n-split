import "./App.css";
import Friends from "./Friends";
import BillSplit from "./BillSplit";
import { useState } from "react";

const friends = ["Clark", "Sarah", "Anthony", "Jane"];

function App() {
  const [selected, setSelected] = useState("");
  const [bill, setBill] = useState(0);
  const [expenses, setExpense] = useState(0);
  const [payPerson, setPayPerson] = useState("you");
  const [paybale, setPaybale] = useState(0);

  function userSelect(name) {
    setSelected(name === selected ? "" : name);
  }

  function splitBill() {
    if (payPerson === "you") {
      setPaybale(bill - expenses);
    }else{
      setPaybale(expenses)
    }
  }

  return (
    <div className="App">
      <div>
        {friends.map((item, index) => (
          <Friends
            buttonText={selected === item ? "close" : "select"}
            className={selected === item ? "friends active" : "friends"}
            onClick={() => userSelect(item)}
            key={index}
            name={item}
            paybale={paybale}
            payPerson={payPerson}
            selectedPerson = {selected}
          />
        ))}
      </div>
      {selected ? (
        <>
          <BillSplit
            expenses={expenses}
            onChangeExpenses={setExpense}
            bill={bill}
            onChangeBill={setBill}
            selectedUser={selected}
            payPerson={payPerson}
            onChangePayPerson={setPayPerson}
            onClick={splitBill}
          ></BillSplit>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
