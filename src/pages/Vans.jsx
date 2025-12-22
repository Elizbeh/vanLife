import React from 'react'
import VanCard from '../components/VanCard'
import { useEffect } from 'react'
import { FaSyncAlt } from "react-icons/fa";
import LoadingIcon from '../components/LoadingIcon';

function Vans() {

  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => {
        if (!data) {
          console.log("Something went wrong")
          return
        }
        setVans(data.vans)
        setLoading(false)
      })
      .catch(err => {
        console.log("Unable to fetch vans", err)
        setLoading(false)
      })
  }, [])

  if(loading) return <LoadingIcon />


  return (
    <main className='van-container'>
      <div className='top'>
        <h1>Explore our van options</h1>
      <div className=''>
        <div>filter links</div>
      </div>
      </div>
      <section className='vanlist-section'>
        {vans.map(van => (
          <VanCard
            key={van.id}
            imageUrl={van.imageUrl}
            name={van.name}
            price={van.price}
            type={van.type}
          />
        ))}
      </section>
    </main>
  )
}

export default Vans