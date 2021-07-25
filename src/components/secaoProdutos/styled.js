import styled from 'styled-components';

export const divProdutos = styled.section`
    box-shadow: #fff 3px 3px 30px 10px;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 2% 0;
        font-family: galada;
        font-size: 2.5rem;
    }
`;
export const ContainerInferior = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    max-width: 1500px;
    justify-content: center;

    div {
        margin: 30px 30px;
        padding: 10px;
        width: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        

        &:hover {
            box-shadow: #000 1px 1px 20px -15px;
        }

        p {
            margin: 10px;
            text-transform: uppercase;
            text-align: center;
        }

        button {
            background-color: #000;
            color: #fff;
            border: 0;
            padding: 5px 10px;
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                transition: all .3s;
                background-color: #7c7c7c;
            }
        }
        
    }
`;