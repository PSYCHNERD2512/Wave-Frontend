import "./Wave.css";
import avtar from "./assets/Avatar.png";
import kartik from "./assets/kartik.png";
import search from "./assets/Search.png";
import waving_hand from "./assets/Waving_hand.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Container from "./components/Container";

async function sendWave(send,receiver_id){
  const sendresponse = await axios.post(`http://127.0.0.1:8000/waving/send_wave/${send}/${receiver_id}/`);
  console.log(sendresponse.status);

}
function finduser(ids, allProfiles) {
  return allProfiles.filter(profile => ids.includes(profile.id));
}




function Wave() {



  ///////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);
  const [datauser, upddata] = useState({});
  let { username } = useParams();
  const [sentlist,usentlist]=useState([])
  const [receivelist,ureceivelist]=useState([])
  useEffect(() => {
    async function getdata() {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/profiles/${username}`,
        );
        const all_data = await axios.get(`http://127.0.0.1:8000/profiles/`);
        setAllProfiles(all_data.data.profiles);
        upddata(data.data);
        console.log(datauser);
        console.log(datauser.connections)
        const sendwaveprofiles=finduser(datauser.sent_requests,allProfiles);
        const receiveprofiles=finduser(datauser.received_requests,allProfiles);
        console.log(sendwaveprofiles);
        usentlist(sendwaveprofiles);
        console.log(sentlist);
        ureceivelist(receiveprofiles);
      
      } catch (err) {
        console.log(err);
      }
    }
    getdata();
  }, [datauser]);

  /////////////////////////////////////////////////

  const list = [
    { name: "Gender", list: ["Female", "Male"] },
    {
      name: "Age",
      list: ["17 & below", "17-20", "20-34", "24-30", "30 & above"],
    },
    {
      name: "Clubs",
      list: [
        "Tech",
        "Robotics",
        "Culturals",
        "Finance",
        "Photography/Filmography",
      ],
    },
    {
      name: "interests",
      list: [
        "Music",
        "Literature & Poetry",
        "Sports",
        "Cultural",
        "Research/Acads",
        "Entrepreneurship",
      ],
    },
    {
      name: "Social Preferences",
      list: [
        "Travel Enthusiasts",
        "Wellness & Fitness",
        "Study buddy",
        "Tech Enthusiasts",
        "Social Events",
        "Music & Arts",
        "Foodie",
      ],
    },
  ];
  if (!datauser) {
    return <div>Loading...</div>;
  }
  return (
    <Container user={datauser}>
      <div id="FILTERDIV">
        <div id="filterupper">
          <span id="Filters">Filters</span>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              axios
                .get(
                  `http://127.0.0.1:8000/profiles/search?filters=${searchTerm}`,
                )
                .then((res) => {
                  setSearchResults(res.data.filtered_users);
                });
            }}
            id="searchdiv"
          >
            <input
              type="text"
              className="textinput"
              placeholder="search names,hobbies and more"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div id="search">
              <button type="submit">
                <img src={search} alt="" />
              </button>
            </div>
          </form>
          <span className="name">Clear All</span>
        </div>
        <div id="filterlower">
          {list.map((head, index) => (
            <div key={index}>
              <div className="category">{head.name}</div>
              <ul className="subcategory">
                {head.list.map((option, index2) => (
                  <li key={index2}>
                    <input type="checkbox" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div id="main">
        {searchResults.length === 0 &&
          allProfiles.map((person) => (
            <FlashCard
              key={person.id}
              img={person.picture}
              data={person}
              name={person.name}
              AboutMe="hii"
              Interests={person.interests.split(", ")}
              id={person.id}
              baapuser={datauser}
            />
          ))}
        {searchResults.map((person) => (
          


          <FlashCard
            key={person.id}
            img={kartik}
            data={person}
            name={person.name}
            AboutMe="hii"
            Interests={person.interests.split(", ")}
            id={person.id}
            baapuser={datauser}
            
          />
        ))}
      </div>

      <div id="sent">
        <span className="span">Waves sent</span>
        <div className="peoples">
        {sentlist.length > 0 &&
            sentlist.map((person, index) => (
              <Avtars
                key={index}
                name={person.name}
                connectionsNum={person.connections.length}
                purpose="sent"
              />
            ))}
        </div>
      </div>
      <div id="receive">
        <span className="span">Waves Received</span>
        <div className="peoples">
        {receivelist.length > 0 &&
            receivelist.map((person, index) => (
              <Avtars
                key={index}
                name={person.name}
                connectionsNum={person.connections.length}
                purpose="Requested"
              />
            ))}
        </div>
      </div>
    </Container>
  );
}

function Purposee({ purpose }) {
  if (purpose === "just") return;
  else if (purpose === "sent") {
    return <div className="pinkbutton">sent</div>;
  } else {
    return <div className="pinkbutton">Requested</div>;
  }
}

function Avtars({ name, connectionsNum, purpose }) {
  return (
    <div className="profile">
      <img src={avtar} alt="" />
      <div id="details">
        <div className="name">{name}</div>
        <div id="connections">{connectionsNum}M connections</div>
      </div>
      <Purposee purpose={purpose} />
    </div>
  );
}

function FlashCard({ img, name, AboutMe, Interests, id, data,baapuser }) {

  const [imageSrc, setImageSrc] = useState(""); // State to store decrypted image URL

  useEffect(() => {
    // Decrypt and set image source when the component mounts
    if (data.image) {
      const blob = base64toBlob(data.image, "image/png"); // Assuming the image is PNG
      const imageUrl = URL.createObjectURL(blob);
      setImageSrc(imageUrl);
    }
  }, [data.image]);


  return (
    <div id="card">
      <Link
        id="link"
        to={{
          pathname: `/profiles/${data.username}`,
          state: { data },
        }}
      >
        <img src={img} alt="profile" id="profilephoto" />
        <br />

        <div id="info">
          <div id="flashcardname">
            <strong>{name}</strong>
          </div>
          <strong>About Me</strong>
          <div id="AboutMe">{AboutMe}</div>
          <br />
          <strong>Interests </strong>
          <br />
          {Interests.map((interest, index3) => (
            <div id="interest" key={index3}>
              {interest}
            </div>
          ))}

          <button
            id="sendwave"
            onClick={(e) => {
              e.preventDefault();             
              sendWave(baapuser.id,id);
            }}
          >
            Send Wave
          </button>
          <img id="wave" src={waving_hand} alt="" />
        </div>
      </Link>
    </div>
  );
}


function base64toBlob(base64Data, contentType = "") {
  const sliceSize = 512;
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}


export default Wave;
