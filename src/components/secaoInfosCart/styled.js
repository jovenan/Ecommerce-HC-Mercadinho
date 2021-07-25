import styled from "styled-components";

export const ContainerInfosInferior = styled.div`
    display: flex;
    width: 100%;
    max-width: 1500px;
    justify-content: center;
    margin: 0 auto;

    div {
        width: 50%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;


        #btnVoltar {
            width: 270px;
            height: 40px;
            background-color: #fff;
            border: 1px solid #b3b3b3;
            font-size: 1.5rem;
            padding: 5px 10px;
            color: #000;
            cursor: pointer;
            
            &:hover {
                transition: all .2s;
                background-color: #444444;
                color: #fff;
            }
        }
    }
`;