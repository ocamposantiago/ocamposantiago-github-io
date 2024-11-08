function Projects({
  name,
  onProjectClick,
}: {
  name: string[];
  onProjectClick: (projectName: string) => void;
}) {
  return (
    <div className="container">
      <div className="landingProjects">
        <p>001</p>
        <p id="projects">Projects</p>
        <span className="spacer"></span>
        <span className="spacer"></span>
        <div className="projectsMenus">
          {name.map((projectName) => (
            <h1 key={projectName} onClick={() => onProjectClick(projectName)}>
              {projectName}
            </h1>
          ))}
          {/* <h1>{name[0]}</h1>
          <h1>{name[1]}</h1>
          <h1>{name[2]}</h1>
          <h1>{name[3]}</h1>
          <h1>{name[4]}</h1> */}
        </div>
        <div className="projectsYear">
          <h1>2018</h1>
          <div className="line"></div>
          <h1>2019</h1>
          <div className="line"></div>
          <h1>2023</h1>
          <div className="line"></div>
          <h1>2024</h1>
          <div className="line"></div>
          <h1>Present</h1>
        </div>
      </div>
      <div className="projectFooter">
        <span className="spacer"></span>
        <span className="spacer"></span>
        <p>
          Services I provide: 3D Design and Rendering, Interactive
          Installations, WebGL Interactivity, WebXR Experiences, Mixed Reality
          Experiences.
        </p>
        <span className="spacer"></span>
        <p>
          3D: Animation, Modeling, Rendering, Motion Tracking, VFX, VR Sculpting
        </p>
        <span className="spacer"></span>
        <p>
          2D: Digital Painting, Concept Art, Motion Graphics, Visuals for Live
          Performance
        </p>
      </div>
    </div>
  );
}

export default Projects;
