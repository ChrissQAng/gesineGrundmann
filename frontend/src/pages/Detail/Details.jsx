import { useLocation, useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const objectInfo = location.state;
  console.log("detail", objectInfo);

  return (
    <div className="detail">
      {objectInfo && objectInfo.images ? (
        objectInfo.images.map((item, index) => (
          <img src={item.image.url} key={index} alt={`object-${index}`} />
        ))
      ) : (
        <p>No images available</p>
      )}
      {objectInfo ? (
        <p>{objectInfo.description}</p>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default Details;