function Friends(props) {
 

  return (
    <div className={props.className}>
      <p>{props.name}</p>
      <button onClick={props.onClick} >{props.buttonText}</button>
     {props.selectedPerson === props.name ? (props.payPerson === 'you' ? 
      <p>{props.selectedPerson} ows you{props.paybale} </p>
       : 
       <p> You ows {props.selectedPerson} {props.paybale} </p>
      ): '' }
    </div>
  );
}

export default Friends;
