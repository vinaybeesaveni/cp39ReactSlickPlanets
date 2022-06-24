import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div className="planet">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="planet-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
