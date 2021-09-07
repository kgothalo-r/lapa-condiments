import styled from 'styled-components';

export const Wrapper = styled.div`
    height: fit-content;
    background-color: var(--darkGrey);
    border-top: 10px solid var(--themeColour);
    padding: 30px;
    color: var(--white);
    width: 100vw;

    h2{
        margin-top: 0;
        margin-bottom: 0;
    }
    p{
        margin-top: 5px;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 768px){
        width: 100vw;

        h2{
            font-size: 20px;
        }
    }
`;
export const Contact = styled.div`
    width: 90%;
    input{
        width: 100%;
        border: none;
        padding: 5px;

        :focus{
            outline: none;
        }
    }
    button{
        display: block;
        margin-top: 20px;
        background-color: var(--themeColour);
        border: none;
        padding: 10px;
        color: var(--white);
        width: 100px;
        font-weight: bold;

        :active{
            opacity: 0.8;
        }
    }

    @media screen and (max-width: 768px){
        margin-right: 0;
    }
`;
export const Info = styled.div`
    height: 200px;
    width: 90%;
    @media screen and (max-width: 768px){
        margin-top: 20px;
        margin-left: 0;
        margin-right: 0;
    }

`;
export const Socials = styled.div`
    height: fit-content;
    display: inline-block;
`;