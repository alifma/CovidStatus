const Landing = () => {
  return (
    <div className="container">
      <div className="row vh-full">
        <div className="col-12 col-md-6 my-auto col-lg-6">
          <h1 className="font-weight-bold">
            <span className="text-main">Covid-19 </span>Cases{" "}
          </h1>
          <h2 className="font-weight-bold">Information Website</h2>
          <h5 className="text-justify">
            You can find Covid-19 disease status such as{" "}
            <span className="text-main">confirmed</span>,{" "}
            <span className="text-danger">death</span> and{" "}
            <span className="text-success">recovered </span> case around the
            world
          </h5>
          <p className="text-secondary mb-0">Source: <a className="text-secondary" href="https://documenter.getpostman.com/view/10808728/SzS8rjbc">Covid-19Api.com</a></p>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <img
            src="https://i.ibb.co/CKWFyht/5876.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center font-weight-bold">Global Case</h2>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center font-weight-bold">Indonesian Case</h2>
        </div>
      </div>
    </div>
  );
};
export default Landing;
