import React from 'react'
import {Link} from 'react-router-dom'

function HostVans() {
  const [hostVans, setHostVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/host/vans")
    .then(res => res.json())
    .then(data => {
      console.log(data.vans)
      if(!data) {
        console.log("Something went wrong")
        return
      }
      setHostVans(data.vans)
    })
    .catch(err => console.log("Unable to fetch Host vans", err))
  }, [])

  return (
    <div className='host-vans-container'>
      <h1 className='tile-heading'>Your listed vans</h1>
      <div className='tile-container'>
        {hostVans.map(van => (
          <Link className='tile-container-links' to={`/host/vans/${van.id}`}>
            <div className='tile-content'>
            <img className='tile-image' src={van.imageUrl} alt="" />
            <div className='tile-details'>
            <p className='tile-van-name'>{van.name}</p>
            <p className='tile-price'>${van.price}/day</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HostVans