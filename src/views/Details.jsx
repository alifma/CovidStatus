import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import formatDate from "../helpers/customDate";
import formatIndo from "../helpers/indonesian";
import simpleDate from "../helpers/simpleDate";
import axios from 'axios'
import { Link } from "react-router-dom";
// Redux
import { GET_COUNTRY_DETAILS } from "./Home/action";
// useSelector = mapGetter
// useDispatch = mapAction
import { useSelector, useDispatch } from "react-redux";
// GoogleMaps
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

// ChartJS
import { Line } from 'react-chartjs-2'

function Map(props) {
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // CountryData via Redux
  const detailCountry = useSelector((state) => state.details);
  // ChartJS data
  const [chartData, setChartData]  = useState({})
  useEffect(() => {
    const chartRender = () => {
      let caseDate = []
      let confCase = []
      let deathCase = []
      let recovCase = []
      let activeCase = []
      axios.get(`https://api.covid19api.com/country/${params.slug}`)
        .then((res) => {
          for(let data of res.data.reverse().slice(0,30).reverse()){
            confCase.push(Number(data.Confirmed))
            deathCase.push(Number(data.Deaths))
            recovCase.push(Number(data.Recovered))
            activeCase.push(Number(data.Active))
            caseDate.push(simpleDate(data.Date))
          }
          // console.log(confCase)
          setChartData({
            labels: caseDate,
            datasets: [
              {
                label: 'Death Case',
                data: deathCase,
                backgroundColor: [
                  'rgba(220, 53, 69, 1)'
                ],
                borderWidth: 4
              },
              {
                label: 'Active Case',
                data: activeCase,
                backgroundColor: [
                  'rgba(70, 110, 182, 0.5)'
                ],
                borderWidth: 4
              },
              {
                label: 'Recovered Case',
                data: recovCase,
                backgroundColor: [
                  'rgba(40, 167, 69, 0.3)'
                ],
                borderWidth: 4
              },
              {
                label: 'Confirmed Case',
                data: confCase,
                backgroundColor: [
                  'rgba(255, 193, 7, 0.3)'
                ],
                borderWidth: 4
              }
            ]
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    dispatch(GET_COUNTRY_DETAILS(params.slug))
    chartRender()
  }, []);
  return (
    <div className="container pt-5">
      <Link to="/" className="h1 text-dark float-left">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <Link to="/" className="h1 text-white float-right">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <h1 className="text-center mb-5">Country Details</h1>
      {detailCountry.listLoading ? (
        <div>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <h5 className="text-center">Please Wait...</h5>
        </div>
      ) : detailCountry.listError ? (
        <div>
          <h1 className="text-center text-secondary mt-5"> {detailCountry.errMessage} </h1>
          <p className="text-center text-secondary mb-5"> Try Again Later </p>
        </div>
      ) : (
        <div>
          <div className="card">
            <div className="card-body">
              <h1 className="d-inline">
                <img
                  className="d-inline mr-4"
                  alt="countryflags.png"
                  src={`https://www.countryflags.io/${detailCountry.list[0].CountryCode.toLowerCase()}/flat/64.png`}
                />
                {`${detailCountry.list[0].Country} (${detailCountry.list[0].CountryCode})`}
              </h1>
              <div className="row mt-4">
                <div className="col-12 col-lg-6 colmd-6">
                  <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Confirmed</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">
                        {formatIndo(detailCountry.list[0].Confirmed)}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Deaths</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">
                        {formatIndo(detailCountry.list[0].Deaths)}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Recovered</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">
                        {formatIndo(detailCountry.list[0].Recovered)}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Active</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">
                        {formatIndo(detailCountry.list[0].Active)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  {/* <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Confirmed Today</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">{formatIndo(detailCountry.list[0].Confirmed-detailCountry.list[1].Confirmed)}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Death Today</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">{formatIndo(detailCountry.list[0].Deaths-detailCountry.list[1].Deaths)}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Recovered Today</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">{formatIndo(detailCountry.list[0].Recovered-detailCountry.list[1].Recovered)}</p>
                    </div>
                  </div>
                   */}
                  <div className="row">
                    <div className="col-4">
                      <p className="font-weight-bold mb-0">Updated</p>
                    </div>
                    <div className="col-8">
                      <p className="mb-0">
                        {formatDate(
                          new Date(formatIndo(detailCountry.list[0].Date))
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-lg-6 col-md-6">
                  <h4 className="font-weight-bold my-3">Maps Location</h4>
                  <div style={{ width: "100%", height: "50vh" }}>
                    <WrappedMap
                      lat={Number(detailCountry.list[0].Lat)}
                      lng={Number(detailCountry.list[0].Lon)}
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                      loadingElement={<div style={{ height: "100%" }} />}
                      containerElement={<div style={{ height: "100%" }} />}
                      mapElement={<div style={{ height: "100%" }} />}
                    />
                  </div>
                </div>
                <div
                  className="col-12 col-lg-6 col-md-6"
                  style={{ overflowY: "scroll", height: "60vh" }}
                >
                  <h4 className="font-weight-bold my-3">Daily Update</h4>
                  {detailCountry.list.map((item, index) => (
                    <div key={index}>
                      <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="font-weight-bold">
                            {formatDate(item.Date)}
                          </h5>
                          <div className="row">
                            <div className="col-3">
                              <p className="font-weight-bold mb-0">Confirmed</p>
                            </div>
                            <div className="col-9">
                              <p className="font-weight-bold mb-0 text-warning">
                                {formatIndo(item.Confirmed)}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3">
                              <p className="font-weight-bold mb-0">Deaths</p>
                            </div>
                            <div className="col-9">
                              <p className="font-weight-bold mb-0 text-danger">
                                {formatIndo(item.Deaths)}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-3">
                              <p className="font-weight-bold mb-0">Recovered</p>
                            </div>
                            <div className="col-9">
                              <p className="font-weight-bold mb-0 text-success">
                                {formatIndo(item.Recovered)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <h4 className="font-weight-bold">Daily Update</h4>
                  <Line data={chartData} 
                  options={{
                    responsive: true,
                    title: {text: 'Last 30 Days Data', display: true},
                    scales: {
                      yAxes:[{
                        ticks: {
                          // autoSkip: true,
                          // maxTicksLimit: 10,
                          beginAtZero: true
                        },
                        gridLines: {
                          display: false
                        }
                      }],
                      xAxes: [{
                        gridLines: {
                          display: false
                        }
                      }]
                    }
                  }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;
