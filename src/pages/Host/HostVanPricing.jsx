import { useOutletContext } from 'react-router-dom'
import LoadingIcon from '../../components/LoadingIcon'
function HostVanPricing() {
  const {van} = useOutletContext()

  if (!van) return <LoadingIcon/>

  return (
    <p>$<span>{van.price}/</span>day</p>
  )

}

export default HostVanPricing