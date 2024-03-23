
const [allProfiles, setAllProfiles] = useState([]);
const all_data = await axios.get(`http://127.0.0.1:8000/profiles/`);
        setAllProfiles(all_data.data.profiles);
      
