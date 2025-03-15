import { useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.github.com/users/${userName}`);
    setUser(data);
  };

  return (
    <div className="min-h-screen flex justify-center p-6 bg-black text-white">
      <div className="max-w-lg w-full rounded-lg shadow-md flex flex-col">
        <h1 className="text-2xl font-bold text-center text-white mb-6 py-2 rounded-lg border-2">
          GitHub User Find
        </h1>
        <div className="bg-white p-6 rounded-t-md flex flex-col justify-center items-center text-black">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              className="w-full px-4 py-2 bg-indigo-950 text-white rounded-r-md"
              onClick={fetchData}
              disabled={!userName}
            >
              Get Data
            </button>
          </div>
        </div>
        <div className="bg-indigo-950 h-[450px] p-4 rounded-b-lg">
          {user && <Profile user={user} />}
        </div>
      </div>
    </div>
  );
}

export default App;














