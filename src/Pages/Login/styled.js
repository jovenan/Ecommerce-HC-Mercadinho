import styled from "styled-components";

export const Fundo = styled.div`
    background: url(/image/fundo-amarelo.jpg);
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #btnVoltar {
        width: 270px;
        height: 40px;
        background-color: #fff;
        border: 1px solid #b3b3b3;
        font-size: 1.5rem;
        padding: 5px 10px;
        color: #000;
        cursor: pointer;
        margin-top: 50px;
        
        &:hover {
            transition: all .2s;
            background-color: #444444;
            color: #fff;
        }
    }

    h3 {
        margin-bottom: 10px;
    }

    form {
        border-radius: 5%;
        width: 20%;
        height: 220px;
        background: rgb(0 0 0 / 75%);
        padding: 50px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        flex-wrap: wrap;
        color: #fff;
        box-shadow: #0006 3px 3px 20px 20px;

        input {
            width: 70%;
            font-size: 1rem;
            margin-bottom: 20px;
            border-radius: 30px;
            border: 0;
            padding: 10px;
            height: 15px;
            outline: none;
        }
        #btnEnviar {
            width: 75%;
            height: 35px;
            font-size: 1.3rem;
            padding: 5px 10px;
            border-radius: 30px;
            border: 0;
            background: #000;
            color: #fff;
            font-weight: 700;
        }
        p {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.8rem;
            p {
                cursor: pointer;
                text-decoration: underline;
            }
            
        }
    }

`; 
export const Mensagem = styled.p`
    margin-bottom: 5px;
    font-size: 1rem;
`;