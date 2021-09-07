import styled from 'styled-components'

export const Wrapper =  styled.div`
    display: flex;
    width: 100%;
    height: 25em !important;

    @media screen and (max-width: 768px){
        width: 100vw;
        height: 40em;
    }
`;

export const Image = styled.img`
    height: 70%;
    object-fit: cover;
    object-position: 0 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    @media screen and (max-width: 768px){
        height: 100%;
        width: 100%;
    }
`;

export const Info = styled.div`
    height: 70%;
    object-fit: cover;
    object-position: 0 80px;
    width: 100%;
    font-size: 15px;
    background-color: var(--darkGrey);
    color:var(--white);
    padding: 2em;
    padding-top: 7rem;

    @media screen and (max-width: 768px){
        padding-top: 1rem;
        padding-bottom: 1rem;
        height: inherit;
    }
`;
