import Button from '../components/Button'
import Card from '../components/Card'
import { features } from '../utils/features'

const Features = () => {
  return (
    <div className='wrapper'>
      <h1 className='title'>We make creative media that adds value</h1>
      <div className='cards-wrapper'>
        {features?.map((feature) => (
          <Card
            title={feature?.title}
            images={feature?.images}
            body={feature?.body}
          />
        ))}
      </div>
      <Button />
    </div>
  )
}
export default Features
