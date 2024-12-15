import "./Tile.css";
import { Link } from "react-router-dom";

const Tile = ({ object }) => {
  return (
    <div>
      <Link to={`/details/${object.id}`} state={object}>
        <img
          className="tile-image"
          src={object.images[0].image.original_doc.url}
        />
      </Link>
    </div>
  );
};

export default Tile;
