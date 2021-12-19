import styled from "styled-components";

export const PlanContainer = styled.div`
    text-align:center;
    margin:60px 0;
`;

export const Heading = styled.h1`
    font-size:35px;
    line-height:50px;
    font-weight:600;
    color: ${p => p.theme.primary};

    @media (max-width:500px){
        font-size:30px;
        line-height:40px;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    line-height:30px;
    font-weight:400;
    color:${p => p.theme.secondary};
    width:100%;
    max-width:555px;
    margin: 20px auto;
    margin-bottom:40px;
    @media (max-width:500px){
        font-size:12px;
        line-height:25px;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    @media(max-width:1100px){
        justify-content:space-around;
    }
    @media (max-width:500px){
        flex-direction:column;
        align-Items:center;
    }
`;