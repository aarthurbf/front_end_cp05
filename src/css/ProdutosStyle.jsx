import styled from 'styled-components';

export const ProdutosStyle = styled.section`
    // Botao
        .btn {
            background-color: var(--color2);
            padding: 8px 0.9rem;
            border-radius: 5px;
            color: var(--color7);
            transition: var(--transition);
        }

        .btn:hover {
            background: transparent;
            border: 2px solid var(--color3);
            color: var(--color2);
        }

    // Barra de pesquisa
        .search-bar {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
        }
        
        .search-bar input {
            width: 50%;
            padding: 0.8rem;
            font-size: 1rem;
            border: 2px solid var(--color3);
            border-radius: 5px;
            outline: none;
            transition: var(--transition);
        }
            
        .search-bar input:focus {
            border-color: var(--color2);
            box-shadow: 0px 0px 10px var(--color2);
        }
            
    // Produtos
        .produto-title {
            font-size: 2rem;
            text-align: center;
            margin: 2.5rem 0 1rem;
            color: var(--color2);
        }

        .produto-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr); 
            justify-items: center;
            grid-gap: 20px;
            padding: 0 1rem;
        }

        .produto-item {
            background-color: var(--color7);
            width: 30rem;
            margin: 3rem auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            box-shadow: 1px 1px 30px darkgray;
            border-radius: 10px;
            transition: 0.5s;
        }

        .produto-item:hover {
            transform: scale(1.1);
        }

        .produto-item img {
            width: 100%;
            border-radius: 5px;
        }

        .produto-item h3 {
            margin: 2rem 0;
            font-weight: 800;
        }

        .produto-item p {
            margin: 0 0 1.5rem;
            width: 80%;
        }

        .preco {
            padding-top: 30px;
            font-size: 1.1rem;
        }

        .vejaMais {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

    // Adicionar produto 
        .produto-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin: 20px auto;
            padding: 20px;
            max-width: 500px;
            background-color: var(--color7);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            text-align: center;
        }

        .produto-form input,
        .produto-form textarea {
            padding: 12px;
            border: 2px solid var(--color3);
            border-radius: 5px;
            font-size: 1rem;
            width: 100%;
            box-sizing: border-box;
        }

        .produto-form textarea {
            resize: none;
            height: 100px;
        }

        .produto-form button {
            padding: 12px 20px;
            background-color: var(--color2);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease;
        }

        .produto-form button:hover {
            background-color: var(--color3);
        }

    // Responsividade
        @media screen and (max-width: 1024px) {
        .produto-list {
                grid-template-columns: repeat(2, 1fr); 
            }

        @media screen and (max-width: 768px) {
            .produto-list {
                grid-template-columns: repeat(1, 1fr); 
            }

            .produto-item {
                width: 25rem;
            }
            
            .produto-form {
                max-width: 100%;
                padding: 15px;
            }
        }

        @media screen and (max-width: 480px) {
            .produto-list {
                grid-template-columns: repeat(1, 1fr); 
            }

            .produto-item {
                width: 100%; 
                margin: 3rem auto;
                padding: 1.5rem;
            }
        }
`;
