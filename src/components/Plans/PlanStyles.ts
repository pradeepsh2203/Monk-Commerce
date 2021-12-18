import styled from "styled-components";

export const PlanContainer = styled.div`
    text-align:center;
    margin:40px 0;
`;

export const Heading = styled.h1`
    font-size:35px;
    line-height:50px;
    font-weight:500;
    color: ${p => p.theme.primary};
`;

export const Text = styled.p`
    font-size: 16px;
    line-height:30px;
    font-weight:400;
    color:${p => p.theme.secondary};
    width:555px;
    margin: 0 auto;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;