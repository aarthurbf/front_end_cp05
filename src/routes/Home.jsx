import { Link } from 'react-router-dom'
import { HomeStyle } from "../css/HomeStyle";
import { useState } from 'react';
import Bmw from '../assets/images/bmw.jpg';
import Porshe from '../assets/images/porshe.jpg';
import Mercedes from '../assets/images/mercedes.jpg'
import CarIcon from '../assets/images/car-icon.png'
import EcoIcon from '../assets/images/eco-icon.png'
import RaioIcon from '../assets/images/raio-icon.png'
import Estrela from '../assets/images/estrela-icon.png'
import FaceOne from '../assets/images/face1.jpg'
import FaceTwo from '../assets/images/face2.jpg'
import FaceThree from '../assets/images/face3.jpg'
import Produto1 from '../assets/images/produto1.png'
import Produto2 from '../assets/images/produto2.png'
import Produto3 from '../assets/images/produto3.png'

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

                <section className="slideshow-container">
                    {images.map((image, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'slide-active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                    <button className="prev" onClick={prevSlide}>❮</button>
                    <button className="next" onClick={nextSlide}>❯</button>
                </section>

                <section className="informacoes">
                    <h3>Vantagens</h3>
                    <p>Inovação, sustentabilidade, atendimento personalizado, condições flexíveis.</p>
                    <hr />
                    <ul className="item">
                        <li>
                            <img src={CarIcon} alt="" className="icon-home" />
                            <h4>Carros</h4>
                            <p> Alta tecnologia, aceleração impressionante, condução suave.</p>
                        </li>
                        <li>
                            <img src={RaioIcon} alt="" className="icon-home" />
                            <h4>Velocidade</h4>
                            <p>Rápidos, eficientes, aceleração de 0 a 100 km/h em poucos segundos.</p>
                        </li>
                        <li>
                            <img src={EcoIcon} alt="" className="icon-home" />
                            <h4>Sustentavel</h4>
                            <p>Redução significativa de carbono, veículos 100% elétricos</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="produto-title">Produtos</h2>
                    <div className="produto-list">
                        <div className="produto-item">
                            <img src={Produto1} alt="" />
                            <h3>ElecSUV X1</h3>
                            <p>Um SUV espaçoso e robusto, ideal para famílias, com autonomia de longa distância e tecnologia avançada.</p>
                            <Link to='/produtos'>
                                <a href="" className="btn">Mais informações</a>
                            </Link>
                        </div>

                        <div className="produto-item">
                            <img src={Produto2} alt="" />
                            <h3>ElecHatch Z2</h3>
                            <p>Um hatch compacto e ágil, perfeito para a cidade, com excelente eficiência energética e design moderno.</p>
                            <Link to='/produtos'>
                                <a href="" className="btn">Mais informações</a>
                            </Link>
                        </div>

                        <div className="produto-item">
                            <img src={Produto3} alt="" />
                            <h3>ElecHatch Y3</h3>
                            <p>Um hatch versátil e econômico, com ótimo desempenho e recursos de conectividade de última geração.</p>
                            <Link to='/produtos'>
                                <a href="" className="btn">Mais informações</a>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="inner">
                        <h1>Avaliações</h1>
                        <div className="row">
                            <div className="col">
                                <div className="testimonial">
                                    <img src={FaceOne} alt="" />
                                    <div className="name">Anna</div>
                                    <div className="stars">
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                    </div>
                                    <p>
                                        “Comprei meu primeiro carro elétrico na ElecCars e estou impressionado com a eficiência e a tecnologia. A aceleração é incrível e o atendimento foi excelente!”
                                    </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="testimonial">
                                    <img src={FaceTwo} alt="" />
                                    <div className="name">ALbert</div>
                                    <div className="stars">
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                    </div>
                                    <p>
                                        “A ElecCars superou minhas expectativas! O carro é super rápido e silencioso, além de ser ótimo para o meio ambiente. Recomendo a todos!”
                                    </p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="testimonial">
                                    <img src={FaceThree} alt="" />
                                    <div className="name">Lucca</div>
                                    <div className="stars">
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                        <img src={Estrela} alt="" />
                                    </div>
                                    <p>
                                        “Adorei a experiência de compra na ElecCars. O veículo é sustentável e tem um desempenho superior. Sem dúvida, a melhor escolha que fiz!”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </HomeStyle>
    );
};

export default Home;
