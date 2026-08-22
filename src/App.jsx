import { useState, useEffect } from "react";
import "./App.css";
import DisplayUsers from "./DisplayUsers.jsx";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (res.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  //conditional rendering
  if (error) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  if (!data) {
    return <h1>Loading.....</h1>;
  }

  const filteredList = data.filter((user) => {
    return user.name.toLowerCase().includes(searchUser.toLowerCase());
  });
  //------------display---------------
  return (
    <>
      <div className="body">
        <form>
          <h1>Search User</h1>
          <input
            type="text"
            placeholder="Search users..."
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </form>
        <div className="container">
          {filteredList.map((user) => (
            <DisplayUsers data={user} />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
