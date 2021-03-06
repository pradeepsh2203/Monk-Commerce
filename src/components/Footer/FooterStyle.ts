import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color:#F8F8F8;
    padding:40px var(--padding-sides);
    display:grid;
    grid-template-columns:auto auto auto auto auto;
    justify-content:space-between;
    
    @media (max-width:850px){
        grid-template-columns: auto auto auto;
        grid-row-gap:50px;
    }
`;

export const InfoContanier = styled.div`
    width:100%;
    max-width:340px;
    grid-column-start:1;
    grid-column-end:3;
    @media (max-width:850px){
        grid-column-end:4;
        max-width:100%;
    }
`;

export const Heading = styled.h3`
    font-size:18px;
    line-height:30px;
    font-weight:600;
    color:${p => p.theme.primary};
    margin-top:0;

    @media (max-width:500px){
        font-size:14px;
        line-height:25px;
    }
`;

export const Text = styled.p`
    font-size:16px;
    line-height:30px;
    font-weight:400;
    color:${p => p.theme.secondary};
    margin:10px 0;
    padding:0;

    @media (max-width:500px){
        font-size:12px;
        line-height:25px;
    }
`;

export const Copyright = styled.p`
    font-size:16px;
    line-height:30px;
    font-weight:400;
    color:#AFB5C0;
    margin:10px 0;
    padding:0;

    @media (max-width:500px){
        font-size:12px;
        line-height:25px;
    }
`;