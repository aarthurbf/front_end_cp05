import styled from 'styled-components';

export const HomeStyle = styled.section`
    // Slideshow 
        text-align: center;
        margin-bottom: 2rem;

        .slideshow-container {
            position: relative;
            width: 100vw; 
            height: 100vh;
            overflow: hidden;
        }

        .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 1s ease-in-out;
            opacity: 0;
        }

        .slide-active {
            opacity: 2;
        }

        .slide img {
            width: 100%; 
            height: 100%;
            object-fit: cover;
        }

        .prev, .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.2);
            color: white;
            font-size: 2rem;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            z-index: 1;
        }

        .prev {
            left: 0;
        }

        .next {
            right: 0;
        }

    // Informações
        .informacoes {
            background: var(--color2);
            color: var(--color7);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 6.25rem 3.12rem;
            text-align: center;
        }
        
        .informacoes h3 {
            font-size: 2rem;
            margin-bottom: 2.1rem;
        }
        
        .informacoes p {
            max-width: 50rem;
            margin-bottom: 2.1rem;
            font-size: 1.2rem;
            text-align: center;
        }
        
        .informacoes hr {
            width: 12rem;
            height: 2px;
            background: var(--color4);
            margin-bottom: 4.3rem;
            border: none;
        }
        
        .informacoes .item {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        
        .informacoes .item li {
            padding: 0 1.8rem;
            text-align: center;
        }
        
        .informacoes .item li h4 {
            color: var(--color7);
            font-size: 1.5rem;
            margin-bottom: 1.8rem;
        }
        
        .informacoes .item li p {
            font-size: 1.2rem;
            margin-bottom: 1.8rem;
        }
        
        .icon-home {
            width: 4.5rem;
        }
    
    // Produtos
        .btn {
            background-color: var(--color5);
            border: 2px solid var(--color4);
            padding: 8px 0.9rem;
            border-radius: 5px;
            color: var(--color7);
            transition: var(--transition);
        }
        
        .btn:hover {
            background: transparent;
            color: var(--color2);
        }

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
            box-shadow: 1px 1px 30px darkgray ;
            border-radius: 10px;
            transition: 0.5S;
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

        .vejaMais {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

    // Testemunhos
        .testimonials {
            padding: 2.5rem 0;
            background: var(--color6);
            color: var(--color2);
            text-align: center;
            margin-top: 1rem;
        }

        .inner {
            max-width: 75rem;
            margin: auto;
            overflow: hidden;
            padding: 0 1.25rem;
        }

        .inner h1 {
            font-size: 2rem ;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .col {
            flex: 33.33%;
            max-width: 33.33%;
            box-sizing: border-box;
            padding: 1rem;
        }

        .testimonial {
            background: var(--color7);
            border-radius: 2rem;
            padding: 1.8rem;
            margin-bottom: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .testimonial img {
            width: 6.25rem;
            height: 6.25rem;
            border-radius: 50%;
        }

        .name {
            font-size: 1.25rem;
            text-transform: uppercase;
            margin: 1.25rem 0;
        }

        .stars {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .stars img {
            width: 1.8rem;
            height: 1.8rem;
        }

    /* Responsividade */
        @media (max-width: 1024px) {
            .slideshow-container {
                height: 80vh;
            }
            
            .produto-list {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        @media (max-width: 768px) {
            .slideshow-container {
                height: 70vh;
            }

            .prev, .next {
                font-size: 1.5rem;
                padding: 0.4rem;
            }

            .produto-list {
                grid-template-columns: repeat(1, 1fr);
            }

            .produto-item {
                width: 25rem;
            }

            .banner h2 {
                font-size: 2rem;
            }

            .banner h3 {
                font-size: 1rem;
            }

            .banner .btn {
                padding: 0.5rem 1rem;
            }

            .informacoes {
                padding: 3rem 1rem;
            }

            .informacoes .item {
                flex-direction: column;
                align-items: center;
            }

            .informacoes .item li {
                margin-bottom: 2rem;
            }

            .informacoes hr {
                width: 100%;
            }

            .col {
                flex: 100%;
                max-width: 100%;
            }
        }

        @media (max-width: 600px) {
            .col {
                flex: 100%;
                max-width: 100%;
            }
        }

        @media (max-width: 480px) {
            .slideshow-container {
                height: 60vh;
            }

            .prev, .next {
                font-size: 1.2rem;
                padding: 0.3rem;
            }

            .produto-list {
                grid-template-columns: repeat(1, 1fr);
            }

            .produto-item {
                width: 100%;
                margin: 3rem auto;
                padding: 1.5rem;
            }

            .banner h2 {
                font-size: 1.5rem;
            }

            .banner h3 {
                font-size: 0.875rem;
            }

            .banner .btn {
                font-size: 0.875rem;
                padding: 0.5rem 1rem;
            }

            .informacoes h3 {
                font-size: 1.5rem;
            }

            .informacoes p {
                font-size: 1rem;
            }

            .informacoes .item {
                flex-direction: column;
            }
        }

        @media (max-width: 320px) {
            .slideshow-container {
                height: 50vh;
            }
        }
`;
