import Heading from '../Heading'

import './styles.css'

const ServiceCard = ({ image, title = '', description= '' }) => (
    <article className="service">
        {image}
        <Heading size="small">{title}</Heading>
        <p className="service__description">{description}</p>
    </article>
)

export default ServiceCard