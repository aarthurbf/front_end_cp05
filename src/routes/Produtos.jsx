import React, { useState } from 'react';
import { ProdutosStyle } from "../css/ProdutosStyle";
import Produto1 from '../assets/images/produto1.png';
import Produto2 from '../assets/images/produto2.png';
import Produto3 from '../assets/images/produto3.png';
import Produto4 from '../assets/images/produto4.png';
import Produto5 from '../assets/images/produto5.png';
import Produto6 from '../assets/images/produto6.png';

// Lista de produtos pré-cadastrados
const produtos = [
    {
        id: 1,
        nome: "ElecSUV X1",
        descricao: "Um SUV espaçoso e robusto, ideal para famílias, com autonomia de longa distância e tecnologia avançada.",
        preco: "R$ 200.000,00",
        imagem: Produto1
    },
    {
        id: 2,
        nome: "ElecHatch Z2",
        descricao: "Um hatch compacto e ágil, perfeito para a cidade, com excelente eficiência energética e design moderno.",
        preco: "R$ 100.000,00",
        imagem: Produto2
    },
    {
        id: 3,
        nome: "ElecHatch Y3",
        descricao: "Um hatch versátil e econômico, com ótimo desempenho e recursos de conectividade de última geração.",
        preco: "R$ 80.000,00",
        imagem: Produto3
    },
    {
        id: 4,
        nome: "ElecHatch V4",
        descricao: "Um hatch compacto e eficiente, ideal para o dia a dia, com baixo consumo de energia e design arrojado.",
        preco: "R$ 70.000,00",
        imagem: Produto4
    },
    {
        id: 5,
        nome: "ElecSedan S7",
        descricao: "Um sedan elegante e confortável, com autonomia impressionante e tecnologia de ponta.",
        preco: "R$ 300.000,00",
        imagem: Produto5
    },
    {
        id: 6,
        nome: "ElecSUV Q5",
        descricao: "Um SUV elegante e espaçoso, com autonomia estendida e recursos avançados de segurança.",
        preco: "R$ 350.000,00",
        imagem: Produto6
    }
];

const Produtos = () => {
    
    // State para controlar o login
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Filtrando produtos com base na busca
    const filteredProducts = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ProdutosStyle>
            <section>
                <h2 className="produto-title">Produtos</h2>

                {/* Campo de pesquisa */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Produtos */}
                <div className="produto-list">
                    {filteredProducts.map(produto => (
                        <div key={produto.id} className="produto-item">
                            <img src={produto.imagem} alt={produto.nome} />
                            <h3>{produto.nome}</h3>
                            <p>{produto.descricao}</p>
                            <a href="#" className="btn">Comprar</a>
                            <p className="preco">{produto.preco}</p>
                        </div>
                    ))}
                </div>

                {/* Botão de cadastrar produto */}
                {isLoggedIn && (
                    <div className="cadastrar-produto">
                        <button className="btn">Cadastrar Produto</button>
                    </div>
                )}
            </section>
        </ProdutosStyle>
    );
};

export default Produtos;
