import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 100px;
    padding-top: 50px;
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
        padding: 10px;
        width: 100vw;
        margin-top: 10em;

        h1{
            margin: 10px !important;
            font-size: 20px;
        }
    }
    @media screen and (max-width: 968px)
    {
        padding: 30px;
        margin-top: 6em !important;
    }
`;

export const Card = styled.div`
    padding: 50px auto;
    margin: 0 auto 30px;
    width: 20em;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: url(${({image}) => image});
    height: 25em;
    background-size: 200%;
    transition: .5s ease-out;

    .details{
            visibility: hidden;
        }

    :hover{
        background: var(--lightGrey) var(--themeColour);
        opacity: 0.8;

        .details{
            visibility: visible;
            position: relative;
        }
    }

    h3{
        font-size: 40px;
        line-height: 1;
        margin-bottom: 0;
        padding-bottom: 0;;
    }
    h4{
        margin-top: 0;
    }

    @media screen and (max-width: 768px)
    {
        margin-bottom: 20px auto;
        width: inherit;
        height: inherit;
        margin:  20px 20px;
        padding-bottom: 10px;

        h3{
            font-size: 30px;
            line-height: 1;
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }

    @media screen and (max-width: 968px)
    {
        margin-bottom: 20px auto;
        width: inherit;
        margin:  20px 20px
    }
`;

export const Button = styled.button`
    padding: 10px;
    font-weight: bold;
    color: var(--lightGrey);
    background-color: black;
    border: none;
    display: block;
    margin: 0 auto;
`;

export const Element = styled.div`
    padding-top: 10%;

`;
