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

function Wave() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);

  let { username } = useParams();
  const [datauser, upddata] = useState({});
  useEffect(() => {
    async function getdata() {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/profiles/${username}`,
        );
        const all_data = await axios.get(`http://127.0.0.1:8000/profiles/`);
        setAllProfiles(all_data.data.profiles);
        upddata(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getdata();
  }, []);

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
              img={kartik}
              data={person}
              name={person.name}
              AboutMe="hii"
              Interests={person.interests.split(", ")}
              id={person.id}
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
          />
        ))}
      </div>

      <div id="sent">
        <span className="span">Waves sent</span>
        <div className="peoples">
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="sent" />
        </div>
      </div>
      <div id="receive">
        <span className="span">Waves Received</span>
        <div className="peoples">
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
          <Avtars name="Tanishq" connectionsNum={69} purpose="Received" />
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

function FlashCard({ img, name, AboutMe, Interests, id, data }) {
  return (
    <div id="card">
      <Link
        id="link"
        to={{
          pathname: `profile/${id}`,
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
              // e.stopPropagation();
              alert("done");
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

export default Wave;
