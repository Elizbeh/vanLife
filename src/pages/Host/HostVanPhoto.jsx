import { useOutletContext } from 'react-router-dom'
import LoadingIcon from '../../components/LoadingIcon'

function HostVanPhoto() {
  const {van} = useOutletContext()
  
  if (!van) return <LoadingIcon/>

  return (
    <img className='van-photo' src={van.imageUrl}/>
  )
}

export default HostVanPhoto