import { useEffect, useState } from "react";
import "./Views.css";

const Views = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/views/viewsImg01.jpg",
    "/images/views/viewsImg02.jpg",
    "/images/views/viewsImg03.jpg",
    "/images/views/viewsImg04.jpg",
    "/images/views/viewsImg05.jpg",
    "/images/views/viewsImg06.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="views-wrapper"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2>views</h2>
      {/* Hier können Sie den restlichen Inhalt Ihrer Seite einfügen */}
    </div>
  );
};

export default Views;
