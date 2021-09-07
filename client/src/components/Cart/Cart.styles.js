import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 80px;
    padding-top: 100px;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    width: 100%;


    h1{
        margin: 30px;
        font-size: var(--fontSuperBig);
        color: rgb(0,0,0);
    }

    @media screen and (max-width: 768px){
        padding: 80px 20px 20px;
    }
`;

export const Empty = styled.p`
    font-size: 90px;
    opacity: 0.4;
    margin-top: 0px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
`;

export const Button = styled.button`
    padding: 10px;
    font-weight: bold;
    color: var(--themeColour);
    border: none;
    display: block;
    background-color: transparent;
    text-align: right;
`;

export const Image = styled.img`
    display: flex;
    max-width: 150px;
`;

export const Element = styled.div`
    text-align: left;
    margin-left: 20px;

    h3{
        margin-bottom: 0;
        padding-bottom: 0;
    }
    p{
        margin-top: 5px;
    }
`;

export const Checkout = styled.div`
    height: 20em;
    background-color: var(--lightGrey);
    text-align: left;
    padding-top: 3px;

    h1{
        font-size: var(--fontMed);
    }
    p{
        margin-top: 5px;
        margin-bottom: 5px;
    }
    input{
        margin-top: 15px;
    }
    p, input{
        margin-left: 30px;
        font-size: var(--fontSmall);
    }

    input{
        margin-top: 10px;
        border-radius: 0;
        border: 1px solid rgb(0,0,0);
        width: 85%;

        :focus{
            outline: none;
        }
    }

    button{
        margin-top: 10px;
        width: 85%;
        background-color: rgb(0,0,0);
        color: var(--white);
        margin-left: 30px;
        border: none;
        height: 30px;

        :active{
            opacity: 0.8;
        }
    }

    @media screen and (max-width: 768px){
        width: 100%;
        margin-top: 30px;
    }
`;