import { useState, useEffect } from "react";
import axios from "axios";
import formatIndo from "../helpers/indonesian";
import formatDate from "../helpers/customDate";
// Redux
import { GET_GLOBAL_DATA } from './Home/action'
// useSelector = mapGetter
// useDispatch = mapAction
import { useSelector, useDispatch } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
  const dataGlobal = useSelector((state) => state.global)
  const [indonesiaData, setIndonesiaData] = useState({
    TotalConfirmed: 0,
    NewConfirmed: 0,
    TotalDeaths: 0,
    NewDeaths: 0,
    TotalRecovered: 0,
    NewRecovered: 0
  });
  // Global Data
  useEffect(() => {
    console.log('Jalanin Axios')
    // axios
    //   .get("https://api.covid19api.com/summary")
    //   .then((res) => {
    //     setIndonesiaData(res.data.Countries[77]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  // GlobalData Via Redux
  useEffect(() => {
    dispatch(GET_GLOBAL_DATA())
  }, [])
  return (
    <div>
      <div className="container pt-5 pb-5">
        <div className="card radius-25">
          <div className="card-body">
            <h1 className="text-center font-weight-bold">
              <span className="text-info">Covid 19</span> Status
            </h1>
            <p className="text-center text-secondary">
              By Alifma & api.covid19api.com
            </p>
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
                <h2 className="text-center mt-5 mb-3"> Global Case</h2>
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
            {indonesiaData === null ? (
              <div>
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <h5 className="text-center">Please Wait...</h5>
              </div>
            ) : (
              <div>
                <h2 className="text-center my-3"> Indonesian Case</h2>
                <div className="row">
                  {/* Confirmed */}
                  <div className="col-12 col-lg-4 col-md-4 mb-3">
                    <div className="card alert-warning radius-25">
                      <div className="card-body ">
                        <h3 className="font-weight-bold">Confirmed</h3>
                        <h5 className="text-dark mb-0">Total Case</h5>
                        <h5 className="text-warning d-inline font-weight-bold">
                          {formatIndo(indonesiaData.TotalConfirmed)}
                        </h5>
                        <p className="pl-2 d-inline align-top">
                          <span className="text-success">{`(+ ${formatIndo(
                            (
                              (indonesiaData.NewConfirmed /
                                (indonesiaData.TotalConfirmed -
                                  indonesiaData.NewConfirmed)) *
                              100
                            ).toFixed(2)
                          )} %)`}</span>
                        </p>
                        <h5 className="text-dark mb-0"> Today</h5>
                        <h5>
                          <span className="text-warning font-weight-bold">
                            {formatIndo(indonesiaData.NewConfirmed)}
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
                          {formatIndo(indonesiaData.TotalDeaths)}
                        </h5>
                        <p className="pl-2 d-inline align-top">
                          <span className="text-success">{`(+ ${formatIndo(
                            (
                              (indonesiaData.NewDeaths /
                                (indonesiaData.TotalDeaths -
                                  indonesiaData.NewDeaths)) *
                              100
                            ).toFixed(2)
                          )} %)`}</span>
                        </p>
                        <h5 className="text-dark mb-0">Today</h5>
                        <h5>
                          <span className="text-danger font-weight-bold">
                            {formatIndo(indonesiaData.NewDeaths)}
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
                          {formatIndo(indonesiaData.TotalRecovered)}
                        </h5>
                        <p className="pl-2 d-inline align-top">
                          <span className="text-success">{`(+ ${formatIndo(
                            (
                              (indonesiaData.NewRecovered /
                                (indonesiaData.TotalRecovered -
                                  indonesiaData.NewRecovered)) *
                              100
                            ).toFixed(2)
                          )} %)`}</span>
                        </p>
                        <h5 className="text-dark mb-0">Today</h5>
                        <h5>
                          <span className="text-success font-weight-bold">
                            {formatIndo(indonesiaData.NewRecovered)}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Updated */}
                  <div className="col-1 col-lg-3 col-md-3"></div>
                  <div className="col-12 col-lg-6 col-md-6">
                    <div className="card h-100 radius-25">
                      <div className="card-body text-center">
                        <h3 className="font-weight-bold">Updated</h3>
                        <h5>{`${formatDate(new Date(dataGlobal.list.Date))}`}</h5>
                        <h5>
                          <span className="font-weight-bold">Source:</span>{" "}
                          <a href="https://api.covid19api.com/">Covid19API</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
