import { Link } from 'react-router-dom';
import { HomeStyle } from "../css/HomeStyle";
import { useState } from 'react';
import Bmw from '../assets/images/bmw.jpg';
import Porshe from '../assets/images/porshe.jpg';
import Mercedes from '../assets/images/mercedes.jpg';
import CarIcon from '../assets/images/car-icon.png';
import EcoIcon from '../assets/images/eco-icon.png';
import RaioIcon from '../assets/images/raio-icon.png';
import Estrela from '../assets/images/estrela-icon.png';
import FaceOne from '../assets/images/face1.jpg';
import FaceTwo from '../assets/images/face2.jpg';
import FaceThree from '../assets/images/face3.jpg';
import Produto1 from '../assets/images/produto1.png';
import Produto2 from '../assets/images/produto2.png';
import Produto3 from '../assets/images/produto3.png';

const Home = () => {
    const images = [Bmw, Mercedes, Porshe];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <HomeStyle>
            <section>
                {/* Slideshow Section */}
                <section className="slideshow-container">
                    {images.map((image, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'slide-active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                    <button className="prev" onClick={prevSlide}>❮</button>
                    <button className="next" onClick={nextSlide}>❯</button>
                </section>

                {/* Informações Section */}
                <section className="informacoes">
                    <h3>Vantagens</h3>
                    <p>Inovação, sustentabilidade, atendimento personalizado, condições flexíveis.</p>
                    <hr />
                    <ul className="item">
                        {[
                            { icon: CarIcon, title: "Carros", desc: "Alta tecnologia, aceleração impressionante, condução suave." },
                            { icon: RaioIcon, title: "Velocidade", desc: "Rápidos, eficientes, aceleração de 0 a 100 km/h em poucos segundos." },
                            { icon: EcoIcon, title: "Sustentável", desc: "Redução significativa de carbono, veículos 100% elétricos." }
                        ].map((item, index) => (
                            <li key={index}>
                                <img src={item.icon} alt={item.title} className="icon-home" />
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Produtos Section */}
                <section>
                    <h2 className="produto-title">Produtos</h2>
                    <div className="produto-list">
                        {[{
                            img: Produto1,
                            title: "ElecSUV X1",
                            desc: "Um SUV espaçoso e robusto, ideal para famílias, com autonomia de longa distância e tecnologia avançada."
                        },
                        {
                            img: Produto2,
                            title: "ElecHatch Z2",
                            desc: "Um hatch compacto e ágil, perfeito para a cidade, com excelente eficiência energética e design moderno."
                        },
                        {
                            img: Produto3,
                            title: "ElecHatch Y3",
                            desc: "Um hatch versátil e econômico, com ótimo desempenho e recursos de conectividade de última geração."
                        }].map((produto, index) => (
                            <div className="produto-item" key={index}>
                                <img src={produto.img} alt={produto.title} />
                                <h3>{produto.title}</h3>
                                <p>{produto.desc}</p>
                                <Link to='/produtos' className="btn">Mais informações</Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testemunhos Section */}
                <section className="testimonials">
                    <div className="inner">
                        <h1>Avaliações</h1>
                        <div className="row">
                            {[{
                                img: FaceOne,
                                name: "Anna",
                                testimonial: "“Comprei meu primeiro carro elétrico na ElecCars e estou impressionado com a eficiência e a tecnologia. A aceleração é incrível e o atendimento foi excelente!”"
                            },
                            {
                                img: FaceTwo,
                                name: "Albert",
                                testimonial: "“A ElecCars superou minhas expectativas! O carro é super rápido e silencioso, além de ser ótimo para o meio ambiente. Recomendo a todos!”"
                            },
                            {
                                img: FaceThree,
                                name: "Lucca",
                                testimonial: "“Adorei a experiência de compra na ElecCars. O veículo é sustentável e tem um desempenho superior. Sem dúvida, a melhor escolha que fiz!”"
                            }].map((testimonial, index) => (
                                <div className="col" key={index}>
                                    <div className="testimonial">
                                        <img src={testimonial.img} alt={testimonial.name} />
                                        <div className="name">{testimonial.name}</div>
                                        <div className="stars">
                                            {Array(5).fill().map((_, starIndex) => (
                                                <img key={starIndex} src={Estrela} alt="Estrela" />
                                            ))}
                                        </div>
                                        <p>{testimonial.testimonial}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </HomeStyle>
    );
};

export default Home;
