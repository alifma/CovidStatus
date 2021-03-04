import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import formatDate from "../helpers/customDate";
import formatIndo from "../helpers/indonesian";
import { Link } from 'react-router-dom'
// Redux
import { GET_COUNTRY_DETAILS } from "./Home/action";
// useSelector = mapGetter
// useDispatch = mapAction
import { useSelector, useDispatch } from "react-redux";
const Details = () => {
  const dispatch = useDispatch();
  const params = useParams()
  // CountryData via Redux
  const detailCountry = useSelector((state) => state.details);
  useEffect(() => {
    dispatch(GET_COUNTRY_DETAILS(params.slug))
  }, [])
  return (
    <div className="container pt-5">
      <Link to="/" className="h1 text-dark float-left"><i className="fas fa-arrow-left"></i></Link>
      <Link to="/" className="h1 text-white float-right"><i className="fas fa-arrow-left"></i></Link>
      <h1 className="text-center">Details</h1>
        {detailCountry.listLoading?
          (
            <div>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <h5 className="text-center">Please Wait...</h5>
            </div>
          ):detailCountry.listError?
          (
            <h1 className="text-center"> {detailCountry.errMessage} </h1>
          ):
          (
            detailCountry.list.map((item, index) => (
            <div key="index">
              <div className="card mb-3">
                <div className="card-body">
                    <h5 className="font-weight-bold">{formatDate(item.Date)}</h5>
                    <p className="font-weight-bold">Confirmed: <span className="text-warning">{formatIndo(item.Confirmed)}</span></p>
                    <p className="font-weight-bold">Deaths: <span className="text-danger">{formatIndo(item.Deaths)}</span></p>
                    <p className="font-weight-bold">Recovered: <span className="text-success">{formatIndo(item.Recovered)}</span></p>
                    <p>{JSON.stringify(item)}</p>
                </div>
              </div>
            </div>
          )))}
    </div>
  )
}
export default Details