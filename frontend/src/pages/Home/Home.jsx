import "./Home.css";

import Tile from "../../components/Tile";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [objects, setObjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomeObjects = async () => {
      try {
        console.log(window.location.origin);

        const res = await fetch(
          `${window.location.origin}:3004/api/artobjects?where[vorangestellt][equals]=true`
        );
        //   `http://localhost:3004/api/artobjects?where[vorangestellt][equals]=true`
        // );
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
      <div className="homeWrapper">
        <img src="/images/image.png" alt="" />
        <h1 className="gesine">Gesine Grundmann</h1>

        <Link to="/about" className="about">
          about
        </Link>
        <Link to="/contact" className="contact">
          contact
        </Link>
        <Link to="/texts" className="texts">
          texts
        </Link>
        <Link to="/views" className="views">
          views
        </Link>
        <Link to="/works" className="works">
          works
        </Link>
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
