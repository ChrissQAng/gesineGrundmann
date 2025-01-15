import "./Tile.css";
import { Link } from "react-router-dom";

const Tile = ({ object }) => {
  console.log("Tile-object param", object);

  return (
    <div className="tile-wrapper">
      <Link to={`/details/${object.id}`} state={object}>
        <img
          className="tile-image"
          src={object.images[0].image.url}

          // src={"/public/media/" + object.images[0].image.filename} // LOCAL ?
        />
      </Link>
    </div>
  );
};

export default Tile;
