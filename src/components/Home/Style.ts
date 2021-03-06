import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 20px 0;
    @media (min-width: 1000px){
        display:grid;
        grid-template-columns:calc( 50% - 25px ) calc( 50% - 25px );
        grid-column-gap:50px;
        align-content:center;
        justify-content:space-between;
    }
`;

export const Image = styled.img`
    width: 100%;
    height:100%;
    object-fit:cover;
    @media (max-width:1000px){
        /* height:unset; */
        width: calc(100vw - 2* var(--padding-sides));
    }
`;

export const Content = styled.div`
    padding: 40px 0;
    @media (max-width:1000px){
        text-align:center;
        padding:20px 0;
        margin-bottom: 60px;
    }
`;

export const Heading = styled.h2`
    font-size:50px;
    font-weight:600;
    line-height:70px;
    color: ${p => p.theme.primary};

    @media (max-width:500px){
        font-size:40px;
        line-height:55px;
    }
`
export const Text = styled.p`
    font-size:16px;
    font-weight:400;
    line-height:30px;
    color: ${p => p.theme.secondary};

    @media (max-width:500px){
        padding:15px 0;
        font-size:12px;
        line-height:25px;
    }
`
export const Button = styled.button`
    background-color:${p => p.theme.focus};
    border:none;
    color:#fff;
    font-weight:700;
    font-size:16px;
    line-height:25px;
    padding: 17.5px 77.5px;
    border-radius:10px;
    cursor:pointer;
    box-shadow:0px 25px 54px 10px #f5383859;

    @media (max-width:500px){
        font-size: 12px;
        line-height:20px;
        padding:15px 60px;
    }
`