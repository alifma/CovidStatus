const Footer = () => {
  return (
    <div className="container my-4">
      <hr/>
      <p className=" font-weight-light text-center mb-0">
        &copy; Alifma 2020. All right reserved.
      </p>
      <div className="text-center">
        <a target="_blank"  rel="noreferrer"
          className="text-secondary mb-0"
          href="https://alifma.com"
        >
          <small className=" font-weight-light ml-2">
            <i className="fas fa-globe"></i> alifma.com
          </small>
        </a>
        <a target="_blank"  rel="noreferrer"
          className="text-secondary mb-0"
          href="https://github.com/alifma"
        >
          <small className=" font-weight-light ml-2">
            <i className="fab fa-github"></i> alifma
          </small>
        </a>
      </div>
    </div>
  );
};
export default Footer;
