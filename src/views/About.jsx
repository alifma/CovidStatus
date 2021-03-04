const About = () => {
  return (
    <div className="container py-5">
      <div className="card">
        <div className="text-center card-body">
          <h1 className="font-weight-bold mb-3">
            <span className="text-main">About </span>This Webpage
          </h1>
          <h5>
            This Webpage are created by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/alifma"
              className="text-main"
            >
              Alifma
            </a>{" "}
            using ReactJS, ReactStrap, Redux, Axios And Google Maps.
          </h5>
          <h5>
            API services used from{" "}
            <a 
              target="_blank"
              rel="noreferrer"
              className="text-main"
              href="https://documenter.getpostman.com/view/10808728/SzS8rjbc">
              api.covid19api.com
            </a>{" "}
            & Images used from{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-main"
              href="https://www.countryflags.io/"
            >
              Countryflags.io
            </a>
          </h5>
          <p className="text-center my-4">
            <a target="_blank" rel="noreferrer" href="https://github.com/alifma/CovidStatus" className="text-secondary">Checkout this Project Repository</a></p>
        </div>
      </div>
    </div>
  );
};
export default About;
