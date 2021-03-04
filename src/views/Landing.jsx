import { useState, useEffect } from "react";
import formatIndo from "../helpers/indonesian";
import formatDate from "../helpers/customDate";
// Redux
import { GET_GLOBAL_DATA, GET_COUNTRY_DATA } from "./Home/action";
// useSelector = mapGetter
// useDispatch = mapAction
import { useSelector, useDispatch } from "react-redux";

const Landing = () => {
  const dispatch = useDispatch();
  const dataGlobal = useSelector((state) => state.global);
  const dataCountry = useSelector((state) => state.country);
  // GlobalData Via Redux
  useEffect(() => {
    dispatch(GET_GLOBAL_DATA())
  }, [])
  // CountryData via Redux
  useEffect(() => {
    dispatch(GET_COUNTRY_DATA())
}, [])
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
          <p className="text-secondary mb-0">
            Source:{" "}
            <a
              className="text-secondary"
              target="_blank"
              href="https://documenter.getpostman.com/view/10808728/SzS8rjbc"
            >
              Covid-19Api.com
            </a>
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <img
            src="https://i.ibb.co/CKWFyht/5876.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h2 className="text-center font-weight-bold">Global Case</h2>
          {dataGlobal.listLoading?
            (
              <div>
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <h5 className="text-center">Please Wait...</h5>
              </div>
            ):dataGlobal.listError?
            (
              <h1 className="text-center"> {dataGlobal.errMessage} </h1>
            ):
            (
              <div>
                <div className="row">
                  {/* Confirmed */}
                  <div className="col-12 col-lg-4 col-md-4 mb-3">
                    <div className="card alert-warning radius-25">
                      <div className="card-body ">
                        <h3 className="font-weight-bold">Confirmed</h3>
                        <h5 className="text-dark mb-0">Total Case</h5>
                        <h5 className="text-warning d-inline font-weight-bold">
                          {formatIndo(dataGlobal.list.TotalConfirmed)}
                        </h5>
                        <p className="pl-2 d-inline align-top">
                          <span className="text-success">{`(+ ${formatIndo(
                            (
                              (dataGlobal.list.NewConfirmed /
                                (dataGlobal.list.TotalConfirmed -
                                  dataGlobal.list.NewConfirmed)) *
                              100
                            ).toFixed(2)
                          )} %)`}</span>
                        </p>
                        <h5 className="text-dark mb-0"> Today</h5>
                        <h5>
                          <span className="text-warning font-weight-bold">
                            {formatIndo(dataGlobal.list.NewConfirmed)}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Death */}
                  <div className="col-12 col-lg-4 col-md-4 mb-3">
                    <div className="card alert-danger radius-25">
                      <div className="card-body ">
                        <h3 className="font-weight-bold">Deaths</h3>
                        <h5 className="text-dark mb-0">Total Death</h5>
                        <h5 className="text-danger d-inline font-weight-bold">
                          {formatIndo(dataGlobal.list.TotalDeaths)}
                        </h5>
                        <p className="pl-2 d-inline align-top">
                          <span className="text-success">{`(+ ${formatIndo(
                            (
                              (dataGlobal.list.NewDeaths /
                                (dataGlobal.list.TotalDeaths -
                                  dataGlobal.list.NewDeaths)) *
                              100
                            ).toFixed(2)
                          )} %)`}</span>
                        </p>
                        <h5 className="text-dark mb-0">Today</h5>
                        <h5>
                          <span className="text-danger font-weight-bold">
                            {formatIndo(dataGlobal.list.NewDeaths)}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Recovered */}
                  <div className="col-12 col-lg-4 col-md-4 mb-3">
                    <div className="card alert-success radius-25">
                      <div className="card-body ">
                        <h3 className="font-weight-bold">Recovered</h3>
                        <h5 className="text-dark mb-0">Total Recovered</h5>
                        <h5 className="text-success d-inline font-weight-bold">
                          {formatIndo(dataGlobal.list.TotalRecovered)}
                        </h5>
                        <p className="pl-2 d-inline align-top">
                          <span className="text-success">{`(+ ${formatIndo(
                            (
                              (dataGlobal.list.NewRecovered /
                                (dataGlobal.list.TotalRecovered -
                                  dataGlobal.list.NewRecovered)) *
                              100
                            ).toFixed(2)
                          )} %)`}</span>
                        </p>
                        <h5 className="text-dark mb-0">Today</h5>
                        <h5>
                          <span className="text-success font-weight-bold">
                            {formatIndo(dataGlobal.list.NewRecovered)}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            }
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <h2 className="text-center font-weight-bold">Indonesian Case</h2>
        </div>
      </div>
      <hr/>
      <div>
          <h2 className="text-center font-weight-bold">Find Your Country Data</h2>
          <div className="text-center my-3">
            <input className="form-control  mx-auto w-50" type="text" placeholder="Find your country"></input>
          </div>
          <div className="row">
          {dataGlobal.country.map((item, index) =>
            (
              <div key={index} className="col-2">
                <div className="card mb-3">
                  <div className="card-body text-center">
                  {item.Country}
                  </div>
                </div>
              </div>
            )
          )}
          </div>
      </div>
    </div>
  );
};
export default Landing;
