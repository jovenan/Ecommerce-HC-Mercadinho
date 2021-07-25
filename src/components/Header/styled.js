import styled from 'styled-components';

export const Header = styled.header`
    width: calc(100% - 40px);
    height: auto;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    align-items: center;
    position: absolute;
    justify-content: space-between;

    img {
        width: 200px;
    }
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;

        #cart {
            width: 50px;
            margin-right: 20px;
            cursor: pointer;
        }

        .Cadastrar {
            margin-right: 20px;
            cursor: pointer;
            color: #fff;
            font-size: 1.3rem;
        }
        .Logado {
            margin-right: 30px;
            color: #fff;
            font-size: 1.3rem;
        }
        .Deslogar {
            margin-right: 30px;
            cursor: pointer;
            color: #fff;
            width: 10px;

            img {
                width: 15px;
                background: #fff;
                padding: 3px;
                border-radius: 10%;
            }
        }
        
    }
    
    
    @media (max-width: 1024px) {
        justify-content: space-between;
        
        img {
            width: 150px;
        }
    }
`;