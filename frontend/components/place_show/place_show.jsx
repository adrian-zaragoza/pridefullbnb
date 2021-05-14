import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import {BiDoorOpen, BiBath, IoBedOutline} from 'react-icons/all'

class PlaceShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlace(this.props.placeId)
  }

  componentDidUpdate(prevProps){
    // if(this.props.places !== prevProps.places){
    //   this.props.fetchPlace(this.props.placeId)
    // }
  }

  render(){
    let place = this.props.places;
    let images;
    let placeSpecs;
    let placeHeader;
    let about;
    let propertyRules;
    let nearbyAttractions;

    if(Object.keys(place).length !== 0 && Array.isArray(place[this.props.placeId].imageUrl)){
      let placeObj = place[this.props.placeId];

      placeHeader = (
        <div className="place-header">
          <h1>{placeObj.title}</h1>
          <h2>{placeObj.location}</h2>
        </div>
      )

      placeSpecs = (
        <ul>
          <li><p className="place-specs-icon"><AiOutlineHome/></p> <p>{placeObj.typeOfPlace}</p></li>
          <li><p className="place-specs-icon"><IoPersonOutline/></p> <p>{`${placeObj.maxGuests} ${placeObj.maxGuests > 1 ? 'guests' : 'guest'}`}</p></li>
          <li><p className="place-specs-icon"><BiDoorOpen/></p> <p>{`${placeObj.numOfBedrooms} ${placeObj.numOfBedrooms > 1 ? 'bedrooms' : 'bedroom'}`}</p></li>
          <li><p className="place-specs-icon"><BiBath/></p> <p>{`${placeObj.numOfBathrooms} ${placeObj.numOfBathrooms > 1 ? 'bathrooms' : 'bathroom'}`}</p></li>
          <li><p className="place-specs-icon"><IoBedOutline/></p> <p>{`${placeObj.numOfBeds} ${placeObj.numOfBeds > 1 ? 'beds' : 'bed'}`}</p></li>
        </ul>
      )

      images = place[this.props.placeId].imageUrl.map((image, i) => {
        return(
            <figure  key={i}>
              <img src={image} alt="place" />
            </figure>
          )
      })

      about = (
        <div className="place-about">
          <h2>About the place</h2>
          <p>{placeObj.about}</p>
        </div>
      )

      propertyRules = (
        <div className="place-rules">
          <h2>Property rules & conditions</h2>
          <p>{placeObj.rules}</p>
          <p><b>Check-in:</b>{placeObj.checkInFrom}</p>
          <p><b>Checkout:</b>{placeObj.checkOutBefore}</p>
          <p><b>Cancellation policy:</b>{placeObj.cancellationPolicy}</p>
        </div>
      )

      nearbyAttractions = (
        <div className="place-attractions">
          <h2>Nearby attractions</h2>
          <p>{placeObj.nearbyAttractions}</p>
        </div>
      )
    }

    return(
      <div className ="place-show">
        <div className="place-images-container">
          {images}
        </div>
        {placeHeader}
        <div className="place-specs">
          {placeSpecs}
        </div>
        {about}
        {propertyRules}
        {nearbyAttractions}
      </div>
    )
  }
}

export default PlaceShow;