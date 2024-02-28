
import { useState, useEffect, useMemo } from 'react'
import { useFetch } from '../helpers/useFetch'
import '../styles/destination.css'


export const DestinationPage = () => {
    const { data , errors  } = useFetch()
    const initialDestination = useMemo(() => data?.destinations?.[0] || {}, [data])
    const [selectedDestination, setSelectedDestination] = useState(initialDestination)

    const handleDestinationSelect = (destinationName) => {
        const destination = data?.destinations?.find(dest => dest.name === destinationName)
        setSelectedDestination(destination)
    }

    useEffect(() => {
        setSelectedDestination(initialDestination)
    }, [initialDestination])

    useEffect(() => {
        if(errors) alert(`Ocurrio un error: ${errors}`)
    }, [errors])

    return (
        <>
              <section className="container__destination">
                  <article>
                      <h1 className="title__destination"><span>01</span> PICK YOUR DESTINATION</h1>
                      <div className="container__data">
                          <figure className="img">
                              <img src={selectedDestination.images} alt={selectedDestination.name} />
                          </figure>
                          <div className="information">
                              <ul className="items">
                                  <li className={`item ${selectedDestination.name === "Moon" ? 'active' : ''}`}  onClick={() => handleDestinationSelect('Moon')}>MOON</li>
                                  <li className={`item ${selectedDestination.name === "Mars" ? 'active' : ''}`}  onClick={() => handleDestinationSelect('Mars')}>MARS</li>
                                  <li className={`item ${selectedDestination.name === "Europa" ? 'active' : ''}`} onClick={() => handleDestinationSelect('Europa')}>EUROPA</li>
                                  <li className={`item ${selectedDestination.name === "Titan" ? 'active' : ''}`}  onClick={() => handleDestinationSelect('Titan')}>TITAN</li>
                              </ul>
                            
                              <h4 className='name'>{selectedDestination.name}</h4>
                                    <p className='description'>{selectedDestination.description}</p>
                                    <hr />
                                    <div className="box-dt">
                                        <div className="distance">
                                          <span>AVG. DISTANCE</span>
                                          <p>{selectedDestination.distance}</p>
                                        </div>
                                        <div className="travel">
                                          <span>EST. TRAVEL TIME</span>
                                          <p>{selectedDestination.travel}</p>
                                        </div>
                                    </div>
                          </div>
                      </div>
                  </article>
              </section>
        </>
    )
}
