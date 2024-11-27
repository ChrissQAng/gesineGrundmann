import "./Works.css";

import Tile from "../../components/Tile";
import { useEffect, useState } from "react";

const Works = () => {
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllObjects = async () => {
      try {
        const res = await fetch(`http://localhost:3003/api/artobjects/`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        // setData(data);
        console.log("Hallo");

        console.log(data);
      } catch (error) {
        // setError(error.message);
        // console.error("Error fetching data:");
      }
    };
    fetchAllObjects();
  }, []);

  return (
    <div className="worksWrapper">
      {/* <h1>works</h1>
      <div className="tileGrid">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div> */}
    </div>
  );
};

export default Works;
