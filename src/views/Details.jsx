import { useParams } from "react-router-dom";
import { useEffect } from "react";
import formatDate from "../helpers/customDate";
import formatIndo from "../helpers/indonesian";
import { Link } from "react-router-dom";
// Redux
import { GET_COUNTRY_DETAILS } from "./Home/action";
// useSelector = mapGetter
// useDispatch = mapAction
import { useSelector, useDispatch } from "react-redux";

import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

function Map(props){
  return (
    <GoogleMap 
    defaultZoom={4} 
    defaultCenter={{lat:props.lat, lng:props.lng }}>
      <Marker  position={{ lat: props.lat, lng: props.lng }}/>
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // CountryData via Redux
  const detailCountry = useSelector((state) => state.details);
  useEffect(() => {
    dispatch(GET_COUNTRY_DETAILS(params.slug));
  }, []);
  return (
    <div className="container pt-5">
      <Link to="/" className="h1 text-dark float-left">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <Link to="/" className="h1 text-white float-right">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <h1 className="text-center mb-5">Details</h1>
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
        <h1 className="text-center my-5"> {detailCountry.errMessage} </h1>
      ) : (
        <div>

        <div className="row">

</div>
<div className="row">
  <div className="col-6">
    <div style={{width:'100%', height:'100%'}}>
    <WrappedMap 
    lat={Number(detailCountry.list[0].Lat)}
    lng={Number(detailCountry.list[0].Lon)}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    />
    </div>
  </div>
  <div className="col-6" style={{overflowY:'scroll', height:'80vh'}}>
    {detailCountry.list.map((item, index) => (
      <div key={index}>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="font-weight-bold">
              {formatDate(item.Date)}
            </h5>
            <p className="font-weight-bold">
              Confirmed:{" "}
              <span className="text-warning">
                {formatIndo(item.Confirmed)}
              </span>
            </p>
            <p className="font-weight-bold">
              Deaths:{" "}
              <span className="text-danger">
                {formatIndo(item.Deaths)}
              </span>
            </p>
            <p className="font-weight-bold mb-0">
              Recovered:{" "}
              <span className="text-success">
                {formatIndo(item.Recovered)}
              </span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      )}
    </div>
  );
};
export default Details;