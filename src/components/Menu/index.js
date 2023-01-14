import './styles.css'

const Menu = () => (
    <menu className="menu">
        <div className="menu__logo">OTAVIO CANEDO</div>
        <nav>
            <a className="menu__link" href="#projects">
                Projetos
            </a>
            <a className="menu__link" href="#experience">
                Experiência
            </a>
            <a className="menu__link" href="#technologies">
                Tecnologias
            </a>
        </nav>
    </menu>
)

export default Menu