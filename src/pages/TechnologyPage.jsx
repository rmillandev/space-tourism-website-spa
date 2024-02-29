import { useFetch } from '../helpers/useFetch'
import { useEffect, useState, useMemo } from 'react' 
import '../styles/technology.css'


export const TechnologyPage = () => {
    const { data, errors } = useFetch()
    const [currentTerminology, setCurrentTerminology] = useState(0)
    const initialTerminology = useMemo(() => data?.technology?.[0] || {}, [data])
    const [selectedTerminology, setSelectedTerminology] = useState(initialTerminology)
    const [widthBrowser, setWidthBrowser] = useState(window.innerWidth)

    useEffect(() => {
        setSelectedTerminology(initialTerminology)
    }, [initialTerminology])

    useEffect(() => {
        const handleSizeChange = () => {
            setWidthBrowser(window.innerWidth)
        }

        window.addEventListener('resize', handleSizeChange)

        return () => window.removeEventListener('resize', handleSizeChange)
    }, [])

    useEffect(() => {
        if(errors) alert(`Ocurrio un error: ${errors}`)
    }, [errors])

    const handleOptionTerminology = (index, terminology) => {
        const selected = data?.technology?.find(term => term.name === terminology)
        setCurrentTerminology(index, terminology) 
        setSelectedTerminology(selected)
    }

    return (
      <>
          <section className="container__technology">
              <article>
                  <h1 className="title__technology"><span>03</span>SPACE LAUNCH 101</h1>
                  <div className="container__data-technology">
                      <div className="container__options">
                          <ul className="options">
                              <li className={`option ${selectedTerminology.name === "Launch vehicle" ? 'active' : ''}`} onClick={() => handleOptionTerminology(0, "Launch vehicle")}>1</li>
                              <li className={`option ${selectedTerminology.name === "Spaceport" ? 'active' : ''}`} onClick={() => handleOptionTerminology(1, "Spaceport")}>2</li>
                              <li className={`option ${selectedTerminology.name === "Space capsule" ? 'active' : ''}`} onClick={() => handleOptionTerminology(2, "Space capsule")}>3</li>
                          </ul>
                          <div className="information__option">
                              <h6>THE TERMINOLOGY...</h6>
                              <h3>{selectedTerminology.name}</h3>
                              <p>{selectedTerminology.description}</p>
                          </div>
                      </div>
                      <figure className="container__img-technology">
                            {
                                widthBrowser <= 1024
                                ? <img src={data?.technology[currentTerminology].imageslandscape} alt={data?.technology.name} />
                                : <img src={data?.technology[currentTerminology].imagesportrait} alt={data?.technology.name} />
                            }
                      </figure>
                  </div>
              </article>
          </section>
      </>
    )
}
