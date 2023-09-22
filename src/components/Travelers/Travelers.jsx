// import React from 'react'
import './../../main.scss'
import paris from '../../assets/paris.jpg'
import newYork from '../../assets/newYork.jpg'
import dubai from '../../assets/dubai.jpg'
import User1 from '../../assets/parisUser1.jpg'
import User2 from '../../assets/user2.jpg'
import User3 from '../../assets/user3.jpg'

const travelers = [
  {
    id: 1,
    destinstionImage: paris,
    travelerImage: User1,
    travelerName: 'Ravina',
    socialLink: '@Ravina12'
  },
  {
    id: 2,
    destinstionImage: newYork,
    travelerImage: User2,
    travelerName: 'Soni',
    socialLink: '@soni55'
  },
  {
    id: 3,
    destinstionImage: dubai,
    travelerImage: User3,
    travelerName: 'Vipin',
    socialLink: '@Vipin70'
  },
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>Top travelers of this month</h2>
        <div className="travelersContainer grid">
          {
            travelers.map(({ id, destinstionImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinstionImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })

          }
        </div>


      </div>
    </div>
  )
}

export default Travelers