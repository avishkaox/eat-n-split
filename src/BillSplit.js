
function BillSplit(props) {
  return (
    <div className="split">
        <h2>SPLIT BILL WITH {props.selectedUser}</h2>
        <div className="row">
            <p>Bill Value</p>
            <input type="number" placeholder="Enter Bill Value"/>
        </div>
        <button>Select</button>
    </div>
  )
}

export default BillSplit;
