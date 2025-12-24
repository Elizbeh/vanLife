import React, { useEffect } from 'react'
import { useParams, NavLink, Outlet} from 'react-router-dom'
import LoadingIcon from '../../components/LoadingIcon'


function HostVanDetail() {
  const [van, setVan] = React.useState(null)
  const {id} = useParams()


  useEffect(()=> {
    fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data => {
      if(!data) {
        return
      }
      setVan(data.vans[0])
    })
    .catch(err => console.log("Something went wrong", err))
  }, [id])


  if (!van) return <LoadingIcon/>

  return (
    <div className='host-van-detail'>
    <NavLink className="return-link" to=".." relative="path"> ← Back to all vans</NavLink>
    <div className='host-van-detail-page'> 
        <div className='host-van-details-container'>
      <div className='host-van-detail-content'>
        <div className='host-van-detail-header'>
            <img className='host-van-detail-img' src={van.imageUrl} alt="" />
            <div className='host-van-detail-right'>
              <p className='host-van-detail-type'>{van.type}</p>
              <h1 className='host-van-detail-name'>{van.name}</h1>
              <p className='host-van-detail-price'>${van.price}<span>/day</span></p>
            </div>
          </div>
      </div>
      <div >
      </div>
      </div>
        <nav className='host-layout-links'>
                <NavLink to="." path="relative">Details</NavLink>
                <NavLink to="pricing" className="navlink">Pricing</NavLink>
                <NavLink to="photo" className="navlink">Photo</NavLink>
        </nav>
        {<Outlet context={{van}}/>}
        
    </div></div>

  )
}

export default HostVanDetail