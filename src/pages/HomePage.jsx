import searchIcon from "../assets/search.png";
import axios from "axios";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, FlashCard, Avatar } from "../components";
import "./HomePage.css";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);
  const [datauser, upddata] = useState({});
  
  const sentRequests = useMemo(() => {
    if (!datauser || !datauser.sent_requests) return [];
    return allProfiles.filter((profile) =>
      datauser.sent_requests.includes(profile.id)
    );
  }, [datauser, allProfiles]);

   const connectionslist = useMemo(() => {
    if (!datauser || !datauser.connections) return [];
    return allProfiles.filter((profile) =>
      datauser.connections.includes(profile.id)
    );
  }, [datauser, allProfiles]);
  
  const receivedRequests = useMemo(() => {
    if (!datauser || !datauser.received_requests) return [];
    return allProfiles.filter((profile) =>
      datauser.received_requests.includes(profile.id)
    );
  }, [datauser, allProfiles]);
  
  let { username } = useParams();

  useEffect(() => {
    async function getdata() {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/profiles/${username}`
        );
        const all_data = await axios.get(`http://127.0.0.1:8000/profiles/`);
        setAllProfiles(all_data.data.profiles);
        upddata(data.data);
        console.log(datauser)
      } catch (err) {
        console.log(err);
      }
    }

    getdata();
  }, [username]);

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
    <Container user={datauser} listofconnections={connectionslist}>
      <div id="home-content">
        <div id="FILTERDIV">
          <div id="filterupper">
            <span id="Filters">Filters</span>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                axios
                  .get(
                    `http://127.0.0.1:8000/profiles/search?filters=${searchTerm}`
                  )
                  .then((res) => {
                    setSearchResults(res.data.filtered_users);
                  })
                  .catch(() => setSearchResults([]));
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
              <button id="search" type="submit">
                <img src={searchIcon} alt="" />
              </button>
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
          <div>
            {searchResults.length === 0 &&
              allProfiles
                .filter((person) => person.id !== datauser.id)
                .map((person) => (
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
                img={person.picture}
                data={person}
                name={person.name}
                AboutMe="hii"
                Interests={person.interests.split(", ")}
                id={person.id}
                baapuser={datauser}
              />
            ))}
          </div>
        </div>

        <div id="sent">
          <span className="span">Waves sent</span>
          <div className="peoples">
            {sentRequests.length === 0 && "No waves sent yet!"}
            {sentRequests.map((person, index) => (
              <Avatar
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
            {receivedRequests.length === 0 && "No waves received yet!"}
            {receivedRequests.map((person, index) => (
              <Avatar
                key={index}
                name={person.name}
                connectionsNum={person.connections.length}
                purpose="Requested"
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
