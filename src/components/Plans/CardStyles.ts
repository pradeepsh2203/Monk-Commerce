import styled from "styled-components";
import Img from "../../data/img/check.svg"

interface TypeProps {
    focus: boolean;
}

export const CardContainer = styled.div<TypeProps>`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    text-align:center;
    width:max-content;
    padding: 80px 55px 50px 55px;
    border:1px solid ${p => {
        if (p.focus === true) return p.theme.focus;
        return "#ddd";
    }};
    border-radius:10px;
    margin: 30px 0;
`;

export const Heading = styled.h2`
    font-weight : 500;
    font-size:18px;
    line-height:30px;
    color:${p => p.theme.primary};
`;

export const List = styled.ul`
    font-size:14px;
    line-height:30px;
    font-weight:400;
    text-align:left;
    color:${p => p.theme.secondary};
    list-style:url(${Img});
`;

export const Button = styled.button<TypeProps>`
    font-size:16px;
    line-height:19px;
    font-weight:700;
    color: ${p => {
        if (p.focus) return "#fff";
        return p.theme.focus;
    }};
    background-color : ${p => {
        if (p.focus) return p.theme.focus;
        return "#fff";
    }};
    border:1px solid ${p => p.theme.focus};
    border-radius : 50px;
    padding: 0.5em 2em;
    cursor:pointer;
`;

export const Price = styled.p`
    font-size:25px;
    font-weight:400;
    line-height:30px;
    color: ${p => p.theme.primary}
`;