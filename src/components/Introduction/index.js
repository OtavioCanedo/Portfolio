import Link from '../links'
import Heading from '../Heading'

import './styles.css'

const Introduction = () => (
    <section>
        <heading size="normal">
            Olá, sou o Otávio Canedo, estou fazendo o<br />
            curso de Ciência da Computação na PUC Minas.
        </heading>
        <div className="introduction__description">
            <p>
                Iniciei a graduação em 2021 e estou no 3º período,
                estou gostando bastante de aprender a desenvolver apps.
                Na faculdade aprendi a programar em C e realizei alguns
                projetos utilizando HTML, CSS e JavaScript, e nesse
                portfólio aprendi um pouco sobre o React.
            </p>
        </div>
        <Link title="Work with Me" link="mailto:otavionevescoc@hotmail.com" />
    </section>
)

export default Introduction