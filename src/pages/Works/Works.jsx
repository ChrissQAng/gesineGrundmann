import "./Works.css";

import Tile from "../../components/Tile";

const Works = () => {
  return (
    <div className="worksWrapper">
      <h1>works</h1>
      <div className="tileGrid">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
};

export default Works;
