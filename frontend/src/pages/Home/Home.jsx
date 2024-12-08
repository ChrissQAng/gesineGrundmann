import "./Home.css";

import Tile from "../../components/Tile";
import { useEffect, useState } from "react";

const Home = () => {
  const [objects, setObjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeObjects = async () => {
      try {
        const res = await fetch(
          `http://87.106.129.195:3004/api/artobjects?where[vorangestellt][equals]=true`
        );
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
    fetchHomeObjects();
  }, []);

  return (
    <>
      <br />
      <div className="homeWrapper">
        <img src="/images/image.png" alt="" />
        <h1>GGGesine Grundmann</h1>
        <a className="about" href="/about">
          about
        </a>
        <a className="contact" href="/contact">
          contact
        </a>
        <a className="texts" href="/texts">
          texts
        </a>
        <a className="views" href="/views">
          views
        </a>
        <a className="works" href="/works">
          works
        </a>
      </div>
      <div className="homeTiles">
        {objects ? (
          objects.map((item) => <Tile key={item.id} object={item} />)
        ) : (
          <p>No image available</p>
        )}
      </div>
    </>
  );
};

export default Home;
