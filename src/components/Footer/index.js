import Heading from '../Heading'
import { IconButton } from "@mui/material"
import { FaGithub as Github } from 'react-icons/fa'
import { AiOutlineMail as Email } from 'react-icons/ai'
import { BsLinkedin as Linkedin } from 'react-icons/bs'

import './styles.css'


const Footer = () => (
    <footer className="footer">
        <Heading lineBottom>Entre em contato</Heading>
        <div className="footer__link">
            <IconButton href="https://www.linkedin.com/in/otaviocanedo" target="_blank"><Linkedin size={40} color="#FF0A54" /></IconButton>
            <IconButton href="https://github.com/OtavioCanedo" target="_blank"><Github size={40} color="#FF0A54" /></IconButton>
            <IconButton href="mailto:otavionevescoc@hotmail.com" target="_blank"><Email size={40} color="#FF0A54" /></IconButton>
        </div>
    </footer>
)

export default Footer