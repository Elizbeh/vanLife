import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import LoadingIcon from '../components/LoadingIcon'

function VanDetail() {

    const [vans, setVan] = React.useState(null)
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => {
            if(!data) {
                console.log("Something went wrong")
                return
            }
            console.log(data.vans)
            setVan(data.vans)
        })
    }, [params.id])
  return (
    <div className='van-detail-container'>
        <Link to='/vans' className='return-link'><p>← Back to all vans</p></Link>
        {vans ? (
            <div className='van-detail-content'>
            <img className='van-detail-img' src={vans.imageUrl} alt={`Image of ${vans.name}`} />
            <div className='van-detail-info'>
                <p className={`type ${vans.type}`}>{vans.type}</p>
                <h1 className='van-name'>{vans.name}</h1>
                <p className='van-price'>${vans.price}<span className='day'>/day</span></p>
                <p className='van-description'>{vans.description}</p>
                <button className='van-detail-btn'>Rent this van</button>
            </div>
        </div>
        ) : < LoadingIcon/>}
    </div>
  )
}

export default VanDetail