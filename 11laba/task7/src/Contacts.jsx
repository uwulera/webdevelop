function Contacts(props)
{
    return(
       <div>
        <h2>{props.name}</h2>
        <img
        width={"300px"}
        height={"300px"}
          src={props.link}
          alt="avatar_img"
        />
        <p>{props.phone}</p>
        <p>{props.mail}</p>
        </div>);
}

export default Contacts;