import Link from '../links'
import Heading from '../Heading'

import './styles.css'

const Introduction = () => (
    <section>
        <heading size="normal">
            Olá, sou o Otávio<br />
            Estou fazendo o curso de Ciência da Computação na PUC Minas.
        </heading>
        <div className="introduction__description">
            <p>
                Comecei a fazer o curso esse ano e estou no 2º
                período, estou gostando bastante de aprender a desenvolver apps.
            </p>
        </div>
        <Link title="Work with Me" link="mailto:otavionevescoc@hotmail.com" />
    </section>
)

export default Introduction