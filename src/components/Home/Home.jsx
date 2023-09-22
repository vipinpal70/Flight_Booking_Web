// import React from 'react'
import video from './../../assets/video.mp4'
import takeoff from './../../assets/takeoff.png'
import './../../main.scss'

const Home = () => {
  return (
    <div className="home flex container">

      <div className="mainText">
        <h2>Create Ever-lasting Memories With Us </h2>

      </div>

      <div className="homeImage flex">

        <div className="videoDiv">
          <video className='video' src={video} autoPlay muted loop></video>
        </div>

        <img src={takeoff} className='plane' />

      </div>



    </div>
  )
}

export default Home