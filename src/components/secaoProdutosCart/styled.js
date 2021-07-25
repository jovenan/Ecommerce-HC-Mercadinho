import styled from "styled-components";

export const ProductsSection = styled.section`
    background-color: whitesmoke;
    box-shadow: #bfbfbf 0px 0px 30px 5px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1 {
        font-size: 2rem;
        margin: 10px 0;
    }
`;

export const ContainerInferior = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    max-width: 1500px;
    justify-content: center;
    box-shadow: #bfbfbf 0px 0px 5px 1px;
    margin: 2% 0;

    .cabeçalhos {
        height: 30px;
        font-weight: 900;
    }
    

    div {
        padding: 10px 0;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #c6c6c6;

        div {
            width: 100%;
            height: 100%;
        }
        .divImagem {
            width: 70%;
        }
        .divNome {
            width: 70%;
        }
        .divPreco {
            width: 80%;
        }
        .divQuantidade {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .btnQuant {
                font-size: 1.4rem;
                margin: 0 20px;
                cursor: pointer;
                border: 0;
                background-color: whitesmoke;
            }
            .btnMenos {
                font-size: 2rem;
            }
        }
        .divRemover {
            width: 20%;

            button {
                cursor: pointer;
                border: 0;
                font-size: 1rem;
            }
        }
        

        p {
            font-size: 0.9rem;
            text-transform: uppercase;
            text-align: center;
        }
        
    }
`;
