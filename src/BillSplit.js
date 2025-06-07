function BillSplit(props) {
  return (
    <div className="split">
      <h2>SPLIT BILL WITH {props.selectedUser}</h2>
      <div className="row">
        <p>Bill Value</p>
        <input
          type="number"
          value={props.bill}
          onChange={(e) => props.onChangeBill(e.target.value)}
        />
      </div>
      <div className="row">
        <p>Your Expenses</p>
        <input type="number" 
        value={props.expenses}
        onChange={(e)=>props.onChangeExpenses(e.target.value)}
        />
      </div>
      <div className="row">
        <p>{props.selectedUser} Expenses</p>
        <p>{props.bill - props.expenses}</p>
      </div>
      <div className="row">
        <p>Who is paying the bill</p>
        <select value={props.payPerson} onChange={(e)=>props.onChangePayPerson(e.target.value)} >
          <option value="you">You</option>
          <option value={props.selectedUser}>{props.selectedUser}</option>
        </select>
      </div>
      <button onClick={props.onClick} >Split the bill</button>
    </div>
  );
}

export default BillSplit;
