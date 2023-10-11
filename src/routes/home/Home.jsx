import React from 'react'
import Hero from '../../components/hero/Hero'
import Life from '../../components/life/Life'
import Locally from '../../components/locally/Locally'
import World from '../../components/world/World'

const Home = () => {
  return (
    <div>
        <Hero />
        <World />
        <Locally />
        <Life />
    </div>
  )
}

export default Home