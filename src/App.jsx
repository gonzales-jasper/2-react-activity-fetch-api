import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

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

  //------------display---------------
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="avatar">{data.name.charAt(0).toUpperCase()}</div>
          <div className="name">
            <h2>{data.name}</h2>
            <p className="subtext">{`@${data.username}`}</p>
          </div>
        </div>
        <div className="card-body">
          <div className="contact-info">
            <p className="blue-text">{data.email}</p>
            <p>{data.phone}</p>
            <p className="blue-text">{data.website}</p>
          </div>

          <div className="address">
            <p>{`${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`}</p>
          </div>
        </div>

        <div className="card-footer">
          <p>{data.company.name}</p>
          <p className="subtext">{data.company.catchPhrase}</p>
        </div>
      </div>
    </>
  );
}
export default App;
