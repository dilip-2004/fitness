import React from 'react'

function Profile() {
  return (
    <div>
      <div className='profile-part'>
        <h1>Profile</h1>
        <img src='' alt='' className='profile-image' />
        <table>
          <tr>
            <td>username</td>
            <td>dilip</td>
          </tr>
          <tr>
            <td>recently viewed</td>
            <td>gym workout</td>
          </tr>
        </table>
        <button>edit</button>
      </div>
    </div>
  )
}

export default Profile