import avtar from "../assets/Avatar.png";

export function Avatar({ name, connectionsNum, purpose,img}) {
  return (
    <div className="profile">
      <img src={img} alt="" />
      <div id="details">
        <p className="name">{name}</p>
        <p id="connections">{connectionsNum}M connections</p>
      </div>
      {purpose === "just" ? (
        <></>
      ) : purpose === "sent" ? (
        <div className="pinkbutton">Sent</div>
      ) : (
        <div className="pinkbutton">Requested</div>
      )}
    </div>
  );
}
