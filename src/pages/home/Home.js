import React from 'react'
import gym from '../../assets/gym.jpg'
import home from '../../assets/home.jpg'
import musclegain from '../../assets/musclegain.jpg'
import weightloss from '../../assets/weightloss.jpg'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='workout-type'>
      <div className='gym-part'>
        <h3 className='title'>GYM WORKOUT</h3>
        <img className='gym-image' src={gym} alt='poor connection' />
        <button className='click-btn'><Link className='click-btn' to='/gymworkout'>click</Link></button>
      </div>
      <div className='home-part'>
        <h3 className='title'>HOME WORKOUT</h3>
        <img className='home-image' src={home} alt='poor connection'/>
        <button className='click-btn'><Link className='click-btn' to='/homeworkout'>click</Link></button>
      </div>
      <div className='musclegain-part'>
        <h3 className='title'>MUSCLEGAIN</h3>
        <img className='musclegain-image' src={musclegain}  alt='poor connection'/>
        <button className='click-btn'><Link className='click-btn' to='/musclegainworkout'>click</Link></button>
      </div>
      <div className='weightlose-part'>
        <h3 className='title'>WEIGHTLOSE</h3>
        <img className='weightlose-image' src={weightloss} alt='poor connection'/>
        <button className='click-btn'><Link className='click-btn' to='/weightlossworkout'>click</Link></button>
      </div>
    </div>
  )
}

export default Home