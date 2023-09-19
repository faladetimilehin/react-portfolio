import cv from "../../assets/FaladeTimilehinDev.pdf"


function About() {
  return (
    <div>

      <div className="container">
        <h2 className="alignCenter mb-5">About</h2>
        <div className="row">
          <p>Highly skilled Frontend Developer with a strong background in building intuitive user interfaces and
            delivering exceptional user experiences. Experienced in leveraging a diverse range of technologies and
            frameworks to create responsive web applications. Adept at collaborating with cross-functional (agile) teams
            to translate business requirements into innovative. and visually appealing designs.<br />

            Seeking opportunities to contribute my expertise in frontend development to drive digital. transformation and
            enhance user engagement. Vast expertise in cloud computing, seeking opportunities to leverage my technical
            skills and experience to contribute to innovative projects in a reputable environment.</p>
        </div>
      </div>
      <div className="container">
        <div className="section-title">
          <h2 className="alignCenter mb-5">Skills</h2>
          <p className="mb-4">Here are some essential front-end developer skills gained to make me create an engaging and
            interactive
            website.</p>
        </div>

      </div>
      <div className="container mt-5">
        <h2 className="alignCenter mb-5">Resume</h2>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
            <a href="https://github.com/faladetimilehin" className="btn btn-success">
              Github link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>

          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <a href={cv} className="btn btn-success" download="faladetimilehinResume"> Download resume
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About