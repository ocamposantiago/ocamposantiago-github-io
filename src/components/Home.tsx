function Home() {
  return (
    <div className="container">
      <div className="menubar">
        <p>Based in Buenos Aires, Argentina</p>
        <p>3D Generalist, Artist & Professor</p>
        <p className="name">Santiago Ocampo</p>
        <p className="topMenu">Projects, About, Contact</p>
      </div>
      <div className="menu">
        <h1>
          <a href="#projects">PROJECTS.</a>
        </h1>
        <h1>
          <a href="#about">ABOUT.</a>
        </h1>
        <h1>
          <a href="#contact">CONTACT.</a>
        </h1>
        <div className="menuphoto">
          <span className="spacer"></span>
          <span className="spacer"></span>
          <span className="spacer"></span>
          <img
            src={`${process.env.PUBLIC_URL}/images/portfolio_photo.png`}
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
