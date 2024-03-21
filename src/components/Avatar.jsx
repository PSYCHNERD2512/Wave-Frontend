import avtar from "../assets/Avatar.png";

export function Avatar({ name, connectionsNum, purpose }) {
  return (
    <div className="profile">
      <img src={avtar} alt="" />
      <div id="details">
        <div className="name">{name}</div>
        <div id="connections">{connectionsNum}M connections</div>
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
