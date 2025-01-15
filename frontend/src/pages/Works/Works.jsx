import "./Works.css";

import Tile from "../../components/Tile";
import { useEffect, useState } from "react";

const Works = () => {
  const [objectss, setObjectss] = useState([]);
  const [error, setError] = useState(null);
  console.log("geloggt nach const", objectss);

  useEffect(() => {
    const fetchAllObjects = async () => {
      try {
        const res = await fetch(
          `${window.location.origin}:3004/api/artobjects?limit=0&&where[vorangestellt][equals]=false&sort=orderOfObjects`
        );
        // `http://localhost:3004/api/artobjects?limit=0&&where[vorangestellt][equals]=false&sort=orderOfObjects` // LOCAL

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data.docs);
        setObjectss(data.docs);
        console.log("objects", objectss);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    fetchAllObjects();
  }, []);

  return (
    <div className="worksWrapper">
      <h2>works</h2>
      <div className="tileGrid">
        {objectss ? (
          objectss.map((item) => <Tile key={item.id} object={item} />)
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
};

export default Works;
