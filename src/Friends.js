function Friends(props) {
 

  return (
    <div className={props.className}>
      <p>{props.name}</p>
      <button onClick={props.onClick} >{props.buttonText}</button>
    </div>
  );
}

export default Friends;
