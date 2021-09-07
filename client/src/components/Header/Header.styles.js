import styled from 'styled-components';

export const Wrapper =  styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 30px;
    position: fixed;
    top:0;
    background-color: var(--white);
    z-index: 1;

    button.nav{
        visibility: hidden;
    }

    @media screen and (max-width: 768px){
        width: 100vw;
        height: 80px;

        button.nav{
            visibility: visible;
            padding-top: 3px;
            border: none;
            background-color: transparent;
            height: 20px;
            width: 20px;
            margin-right: 0;
        }
    }
`;

export const Image = styled.img`
    width: 5rem;
    padding: 0;

    @media screen and (max-width: 768px){
        width: 5rem;
    }
`;

export const Cart = styled.button`
    font-size: 1rem;
    border: none;
    border-radius: 0;
    color: var(--white);
    background-color: transparent;
    padding: 1.5rem 0.5rem;
    margin-left: 0.5rem;
    color: var(--themeColour);
    @media screen and (max-width: 768px){
        padding-left: 0;
        padding-right: 0;
        margin-left: 0;
        display: inline-block;
    }
`;

export const Button = styled.button`
    font-size: var(--fontSmall);
    border: none;
    border-radius: 0;
    background-color: transparent;
    padding: 5px 0.5rem;
    margin-left: 0.5rem;

    :hover{
        background-color: var(--themeColour);
    }

    @media screen and (max-width : 768px){
        position: relative;
        top: -5px;
        right: 20px;
        padding: 5px 20px 5px 20px;
        margin: 0 auto;
        background-color: var(--themeColour);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;

        :focus{
            display: flex;
        }
    }
`;
export const Explore = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: flex-end;
    padding: 20px 20px 10px;
    margin: 0;
    width: 100%;
    

    @media screen and (max-width : 768px){
        flex-direction: column;
        width: 100vw;
        position: absolute;
        top: 78px;
        right: 0;
        background-color: var(--themeColour);
        padding: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

`;