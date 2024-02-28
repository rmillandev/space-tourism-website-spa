import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../styles/crew.css'
import Slider from "react-slick"
import { useFetch } from "../helpers/useFetch"
import { useState, useEffect } from "react"

export const CrewPage = () => {
    const { data, errors } = useFetch()
    const [currentSlider, setCurrentSlider] = useState(0)

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 550,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlider(current)
    }

    useEffect(() => {
        if(errors) alert(`Ocurrio un error: ${errors}`)
    }, [errors])

    return (
        <>
            <section className="container__crew">
                <article>
                    <h1 className="title__crew"><span>02</span>MEET YOUR CREW</h1>
                    <div className="container__data-crew">
                        <div className="container__slider">
                            <Slider {...settings}>
                                {
                                    data?.crew.map(member => (
                                        <div key={member.name}>
                                            <h4>{member.role}</h4>
                                            <h1>{member.name}</h1>
                                            <p>{member.bio}</p>
                                        </div>
                                    ))      
                                }
                            </Slider>
                        </div>
                        <figure className="container__img">
                            <img src={data?.crew[currentSlider].images} alt={data?.crew[currentSlider].name} />
                        </figure>
                    </div>
                </article>
            </section>
        </>
    )
}
