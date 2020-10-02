import React from 'react'
import { Link } from 'react-router-dom'


const Features = () => {

  return (

    <section className='features-container'>
      <div className='features-glamping'>
        <Link to={'/locations/glamping'}>Glamping</Link>
      </div>
      <div className='features-activities'>Activities</div>
      <div className='features-events'>Events</div>
    </section>


  )
}

export default Features