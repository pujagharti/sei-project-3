import React from 'react'
import { Link } from 'react-router-dom'


const Features = () => {

  return (

    <section className='features-container'>
      <Link to="/" className='features-nightLife'>Night Life</Link>
      <Link to="/features/summer" className='features-summer'>Summer</Link>
      <Link to="/features/gowild" className='features-goWild'>Go Wild</Link>
    </section>


  )
}

export default Features