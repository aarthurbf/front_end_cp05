import { ProdutosStyle } from "../css/ProdutosStyle";
import Produto1 from '../assets/images/produto1.png'
import Produto2 from '../assets/images/produto2.png'
import Produto3 from '../assets/images/produto3.png'
import Produto4 from '../assets/images/produto4.png'
import Produto5 from '../assets/images/produto5.png'
import Produto6 from '../assets/images/produto6.png'

const Produtos = () => {
    return (
        <ProdutosStyle>
            <section>
                <h2 className="produto-title">Produtos</h2>
                <div className="produto-list">
                    <div className="produto-item">
                        <img src={Produto1} alt="" />
                        <h3>ElecSUV X1</h3>
                        <p>Um SUV espaçoso e robusto, ideal para famílias, com autonomia de longa distância e tecnologia avançada.</p>
                        <a href="" className="btn">Comprar</a>
                        <p className='preco'>R$ 200.000,00</p>
                    </div>

                    <div className="produto-item">
                        <img src={Produto2} alt="" />
                        <h3>ElecHatch Z2</h3>
                        <p>Um hatch compacto e ágil, perfeito para a cidade, com excelente eficiência energética e design moderno.</p>
                        <a href="" className="btn">Comprar</a>
                        <p className='preco'>R$ 100.000,00</p>
                    </div>

                    <div className="produto-item">
                        <img src={Produto3} alt="" />
                        <h3>ElecHatch Y3</h3>
                        <p>Um hatch versátil e econômico, com ótimo desempenho e recursos de conectividade de última geração.</p>
                        <a href="" className="btn">Comprar</a>
                        <p className='preco'>R$ 80.000,00</p>
                    </div>

                    <div className="produto-item">
                        <img src={Produto4} alt="" />
                        <h3>ElecHatch V4</h3>
                        <p>Um hatch compacto e eficiente, ideal para o dia a dia, com baixo consumo de energia e design arrojado.</p>
                        <a href="" className="btn">Comprar</a>
                        <p className='preco'>R$ 70.000,00</p>
                    </div>

                    <div className="produto-item">
                        <img src={Produto5} alt="" />
                        <h3>ElecSedan S7</h3>
                        <p> Um sedan elegante e confortável, com autonomia impressionante e tecnologia de ponta.</p>
                        <a href="" className="btn">Comprar</a>
                        <p className='preco'>R$ 300.000,00</p>
                    </div>

                    <div className="produto-item">
                        <img src={Produto6} alt="" />
                        <h3>ElecSUV Q5</h3>
                        <p>Um SUV elegante e espaçoso, com autonomia estendida e recursos avançados de segurança.</p>
                        <a href="" className="btn">Comprar</a>
                        <p className='preco'>R$ 350.000,00</p>
                    </div>
                </div>
            </section>
        </ProdutosStyle>
    )
}

export default Produtos