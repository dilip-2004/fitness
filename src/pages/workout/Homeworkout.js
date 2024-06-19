import React from 'react'
import fs1 from '../../assets/fs1.jpg'

function Homeworkout(workoutProp) {
  return (
    <>
    <h1 className='header-name'>HOME WORKOUT - THERE IS NO LIMIT...</h1>
    <div className='workout-container'>
      {
        workoutProp.homeWorkout.map((data,i)=>{
          return (
            <div className='workouts'>
            <h1 className='workout-title'>{data.day} - {data.type}</h1>
            <div className='workout-card'>
              {
                data.ex.map((data2,i)=>{
                  return(
                    <div className='workout-details'>
                      <img src={fs1} alt='' className='workout-image' />
                      <p>{data2}</p>
                      <p>{data.type==='rest' ? '' : '3*max reps'}</p>
                      <p>{data.type==='rest' ? '' : 'rest for 90 sec - 120 sec'}</p>
                    </div>
                  )
                })
              }
            </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Homeworkout