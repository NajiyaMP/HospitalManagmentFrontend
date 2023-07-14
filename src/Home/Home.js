import React from 'react'
import Navigationbar from '../Navigationbar'

const Home = () => {
  
    const backgroundImageUrl = 'url("/images/main.jpg")'; // Replace with the actual image URL
  
    const containerStyle = {
      background: backgroundImageUrl,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      /* Add more background-related properties if needed */
    };
  
  return (
    <div>
      <div style={containerStyle}>
      {/* Your component content */}
    </div>
      <Navigationbar/>
    </div>
  )
}

export default Home