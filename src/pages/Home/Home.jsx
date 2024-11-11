import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Gesine Grundmann</h1>
      <br />
      <div className="container">
        <img src="/./public/images/image.png" alt="" />
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
    </>
  );
};

export default Home;
