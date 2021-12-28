import Link from '../links'
import Heading from '../Heading'

import './styles.css'


const Footer = () => (
    <footer className="footer">
        <Heading>Read me Out</Heading>
        <div className="footer__link">
            <Link link="mailto:otavionevescoc@hotmail.com" title="Email" />
            <Link link="https://github.com/OtavioCanedo" title="Github" />
            <Link link="https://www.instagram.com/otavio_canedo/" title="Instagram" />
            <Link link="https://www.linkedin.com/in/ot%C3%A1vio-canedo-235267b3/" title="LinkedIn" />
        </div>
    </footer>
)

export default Footer