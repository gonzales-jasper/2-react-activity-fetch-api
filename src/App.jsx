import { useState, useEffect } from "react";
import "./App.css";
import Display from "./display.jsx";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users?id=10",
        );

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

  //---------------------------
  return (
    <>
      <div className="container">
        {data.map((user) => (
          <Display data={user} />
        ))}
      </div>
    </>
  );
}
export default App;
