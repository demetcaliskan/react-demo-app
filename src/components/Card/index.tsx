import './index.css'

interface CardTypes {
  images: { src: string; alt: string }[]
  title: string
  body: {
    bulletList?: string[]
    descriptions: string[]
  }
}

const Card = ({ images, title, body }: CardTypes) => {
  return (
    <div className='card'>
      <div className='images-wrapper'>
        {images?.map((img) => (
          <img className='card-img' src={img?.src} alt={img?.alt} />
        ))}
      </div>
      <div className='card-body'>
        <p className='card-title'>{title}</p>
        {body?.bulletList ? (
          <ul className='card-bullet-list'>
            {body?.bulletList?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : null}
        {body?.descriptions?.map((desc) => (
          <p className='card-description'>{desc}</p>
        ))}
      </div>
    </div>
  )
}

export default Card
