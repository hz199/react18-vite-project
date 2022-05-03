import { Link } from 'react-router-dom'

function Gallery() {
  return (
    <div className="text-base font-semibold tracking-wide text-blue-600">
      Gallery <br></br>
      <Link to={'/Details'}>Details</Link>
    </div>
  )
}

export default Gallery
