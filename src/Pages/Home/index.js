import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import SkillCard from '../../components/SkillCard'
import ProjectCard from '../../components/ProjectCard'
import Experience from '../../components/Experience'
import Introduction from '../../components/Introduction'

import skills from './skills'
import projects from './projects'

import './styles.css'

const Home = () => (
    <main className="home">
        <header className="light-bg">
            <div className="container">
                <Menu />
            </div>
        </header>

        <section className="container section">
            <Introduction />
        </section>

        <section className="section light-bg">
            <Heading id="projects" lineBottom >
                Projetos
            </Heading>
            <div className="container projects__container">
                {projects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />    
                ))}
            </div>
        </section>

        <section className="section">
            <Heading id="experience" lineBottom>
                Experiência
            </Heading>
            <div className="container experience__container">
                <Experience />
            </div>
        </section>

        <section className="section light-bg">
            <Heading id="technologies" lineBottom>
                Tecnologias
            </Heading>
            <div className="container technologies__container">
                {skills.map((item, index) => {
                    const Icon = item.image

                    return (
                        <SkillCard
                            key={index}
                            image={<Icon size={70} color="#FF0A54" />}
                            title={item.title}
                        />    
                    )
                })}
            </div>
        </section>

        <section className="section">
            <div className="container">
                <Footer />
            </div>
        </section>
    </main>
)

export default Home 