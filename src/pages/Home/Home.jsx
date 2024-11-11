import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Gesine Grundmann</h1>
      <br />
      <img src="/./public/images/image.png" alt="" />
      <a className="about" href="/about">
        about
      </a>
      <a href="/contact">contact</a>
      <a href="/texts">texts</a>
      <a href="/views">views</a>
      <a href="/works">works</a>
    </>
  );
};

export default Home;
