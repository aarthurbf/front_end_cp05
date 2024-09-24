import styled from 'styled-components';

export const ProdutosStyle = styled.section`
.btn{
    background-color: var(--color2);
    padding: 8px 0.9rem;
    border-radius: 5px;
    color: var(--color7);
    transition: var(--transition);
}

.btn:hover{
    background: transparent;
    border: 2px solid var(--color3);
    color: var(--color2);
}
.produto-title{
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

.produto-item{
    background-color: var(--color7);
    width: 20rem;
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
.produto-item:hover{
    transform: scale(1.1);
}

.produto-item img{
    width: 100%;
    border-radius: 5px;
}
.produto-item h3{
    margin: 2rem 0;
    font-weight: 800;
}
.produto-item p{
    margin: 0 0 1.5rem;
    width: 80%;
}

.preco{
    padding-top: 30px;
    font-size:1.1rem;
}

.vejaMais{
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

@media screen and (max-width: 768px) {
    .produto-list {
        grid-template-columns: repeat(2, 1fr); 
    }

    .produto-item{
        width: 25rem;
    }

  }
  
  @media screen and (max-width: 480px) {
    .produto-list {
        grid-template-columns: repeat(1, 1fr); 
    }

    .produto-item{
        width: 100%; 
        margin: 3rem auto; 
        padding: 1.5rem;
    }
  }
`