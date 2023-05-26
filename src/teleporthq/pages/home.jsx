import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Productive Realistic Worm</title>
        <meta property="og:title" content="Productive Realistic Worm" />
      </Helmet>
    </div>
  )
}

export default Home
