import { Typography } from '@mui/material'
import Heading from '../Heading'
import Link from '../links'
import foto from '../../assets/foto.jpg'

import './styles.css'

const Introduction = () => (
    <section>
        <div className="image">
            <img src={foto} alt="foto de perfil" />
        </div>
        <Heading size="normal">
            Olá, meu nome é Otávio Canedo e sou Desenvolvedor Web desde 2022.
        </Heading>
        <div className="introduction__description">
            <Typography>
                Estou cursando Ciência da Computação na PUC MG, atualmente estou no 5º período. Tenho experiência de 5 meses como 
                Desenvolvedor Web. As principais tecnologias que utilizei foram React, CSS3 e Material-UI no Front-end, onde 
                aprendi sobre Hooks, Redux, componentes, estados, props, renderização e rotas. No Back-end, utilizei Node com 
                Express, aprendendo sobre o funcionamento de uma API, models e controllers. Na faculdade, aprendi Algoritmo e 
                Estruturas de Dados na linguagem C, tive introdução de Banco de Dados com foco em SQL, e comecei a estudar Java 
                e manipulação de dados com Python.
            </Typography>
        </div>
        <div className="links">
            <Link href="https://www.linkedin.com/in/otaviocanedo" title="Linkedin" />
            <Link href="https://github.com/OtavioCanedo" title="Github" />
            <Link href="mailto:otavionevescoc@hotmail.com" title="Me envie um email" />
        </div>
    </section>
)

export default Introduction