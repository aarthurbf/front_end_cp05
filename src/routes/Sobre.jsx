import { SobreStyle } from "../css/SobreStyle"
import imageSobre from '../assets/images/sobre-image.jpg'

function Sobre() {

    return (
        <SobreStyle>
            <section>
                <div className="heading-sobre">
                    <h1>Sobre Nós</h1>
                    <p>Na ElecCars, estamos comprometidos em transformar a maneira como você se desloca, oferecendo veículos elétricos de alta qualidade que são tanto sustentáveis quanto inovadores. Fundada em 2020, nossa missão é proporcionar uma experiência de condução ecológica e eficiente, sem comprometer o desempenho ou o estilo. Acreditamos que a mobilidade elétrica é o caminho para um amanhã melhor, e estamos aqui para guiá-lo nessa jornada. Na ElecCars, cada veículo é uma promessa de inovação, qualidade e respeito pelo meio ambiente</p>
                </div>
                <div className="container-sobre">
                    <section className="sobre">
                        <div className="sobre-img">
                            <img src={imageSobre} alt="" />
                        </div>
                        <div className="sobre-content">
                            <h2>Nossa História</h2>
                            <p>A ElecCars foi fundada em 2020 com a missão de transformar a mobilidade urbana através de veículos elétricos inovadores e sustentáveis. Desde então, a empresa tem se destacado por oferecer carros elétricos de alta qualidade, combinando eficiência, desempenho e respeito ao meio ambiente. Com uma equipe dedicada à tecnologia e sustentabilidade, a ElecCars continua a expandir seu impacto no mercado de veículos elétricos. Hoje, a ElecCars é sinônimo de inovação e compromisso com um futuro mais verde.</p>
                        </div>
                    </section>
                </div>
            </section>
        </SobreStyle>
    )
}

export default Sobre;