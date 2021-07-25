import styled from 'styled-components';

export const Principal = styled.section`
    color: #fff;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background: url(/image/fundo-inicial.jpg);
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    height: 50vh;
    z-index:9;

    h1 {
        text-decoration: underline;
        font-size: 3rem;
        font-family: 'Galada', cursive;
    }
    p {
        font-size: 1.5rem;
        font-weight: 500;
        padding-bottom: 10px;
    }
    @media (max-width: 1024px) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
            font-weight: 500;
            padding-bottom: 10px;
        }
    }
    @media (max-width: 400px) {
        h1 {
            font-size: 1.5rem;
        }
        p {
            font-size: 0.8rem;
            font-weight: 500;
            padding-bottom: 10px;
        }
    }
`;