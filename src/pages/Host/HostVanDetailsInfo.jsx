import { useOutletContext } from 'react-router-dom'
import LoadingIcon from '../../components/LoadingIcon'
function HostVanDetailsInfo() {

    const {van} = useOutletContext()
    
    if (!van) return <LoadingIcon/>

  return (
    <div className='host-van-info'>
        <p><span>Name: </span>{van.name}</p>
        <p><span>Category: </span>{van.type}</p>
        <p><span>Description: </span>{van.description}</p>
        <p><span>Visibility: </span>Public</p>
    </div>
  )
}

export default HostVanDetailsInfo