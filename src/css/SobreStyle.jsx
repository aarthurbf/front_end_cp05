import styled from "styled-components";

export const SobreStyle = styled.section`
.heading-sobre{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 5rem auto;
}

.heading-sobre h1{
    font-size: 2.5rem;
    color: var(--color2);
    margin-bottom: 1.5rem;
}

.heading-sobre p{
    font-size: 1.3rem;
}

.container-sobre{
    width: 90%;
    margin: 6.5rem auto;
    padding: 0.6rem 1.1rem;
}

.sobre{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.sobre-img{
    flex: 1;
    margin-right: 2.5rem;
    overflow: hidden;
}

.sobre-img img{
    border-radius: 1.3rem;
    max-width: 100%;
    height: auto;
    display: block;
}

.sobre-content{
    flex: 1;
}

.sobre-content h2{
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color2);
}

.sobre-content p{
    font-size: 1.2rem;
    line-height: 1.5;
}

@media screen and (max-width: 768px) {
    .heading-sobre{
        padding: 0 1.2rem;
    }
    .heading-sobre h1{
        font-size: 2rem;
    }
    .heading-sobre p{
        font-size: 1rem;
        margin-bottom: 0;
    }
    .container-sobre{
        margin-top: 1rem;
        padding: 0;
    }
    .sobre{
        padding: 1.1rem;
        flex-direction: column;
        text-align: center;
    }
    .sobre-img{
        margin-right: 0;
        margin-bottom: 1.1rem;
    }

    .sobre-content h2{
        font-size: 1.7rem;
    }

    .sobre-content p{
        padding: 0;
        font-size: 1rem ;
    }

}
`