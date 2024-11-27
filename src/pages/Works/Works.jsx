import "./Works.css";

import Tile from "../../components/Tile";
import { useEffect, useState } from "react";

const Works = () => {
  const [objects, setObjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllObjects = async () => {
      try {
        const res = await fetch(`http://localhost:3003/api/artobjects/`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data.docs);
        setObjects(data.docs);
        console.log("objects", objects);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    fetchAllObjects();
  }, []);

  return (
    <div className="worksWrapper">
      <h1>works</h1>
      <div className="tileGrid">
        {objects ? (
          objects.map((item) => (
            <Tile key={item.id} imgUrl={item.images[0].image.url} />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Works;
