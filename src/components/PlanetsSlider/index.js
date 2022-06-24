import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  //   const settings = {
  //     dots: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   }
  return (
    <div className="bg-container" testid="planets">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider className="slider-container">
        {planetsList.map(planet => (
          <PlanetItem key={planet.id} planet={planet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
