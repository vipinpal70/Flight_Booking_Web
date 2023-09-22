// import React from 'react'
import image from '../../assets/logo.jpg'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        {/* ---------img div----------------> */}
        <div className="imgDiv">
          <img src={image} alt="" />
        </div>

        {/* ---------text div----------------> */}
        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
        </div>

        {/* ------------grids-------------> */}

        <div className="grids grid">

          {/* ............1st grid.......... */}
          <div className="singleGrid">
            <span className='gridTitle'> Help through the airport</span>
            <p>You can call airlines from yourt phone and book a flight ticket to one of your favourite destinations. </p>
          </div>

          {/* ............ 2nd grid.......... */}
          <div className="singleGrid">
            <span className='gridTitle'> Priority Boarding </span>
            <p>You can call airlines from yourt phone and book a flight ticket to one of your favourite destinations. </p>
          </div>

          {/* ............ 3rd grid.......... */}
          <div className="singleGrid">
            <span className='gridTitle'>Care on flight </span>
            <p>You can call airlines from yourt phone and book a flight ticket to one of your favourite destinations. </p>
          </div>
          {/* ............ 4th grid.......... */}
          <div className="singleGrid">
            <span className='gridTitle'>Chauffeur-drive service</span>
            <p>You can call airlines from yourt phone and book a flight ticket to one of your favourite destinations. </p>
          </div>

        </div>

      </div>
    </div >
  )

}

export default Lounge