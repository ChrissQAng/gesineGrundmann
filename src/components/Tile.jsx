import "./Tile.css";

const Tile = ({ imgUrl }) => {
  return (
    <div>
      <img src={imgUrl} />
    </div>
  );
};

export default Tile;
