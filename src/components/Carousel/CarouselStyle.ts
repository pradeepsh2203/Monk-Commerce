import styled from "styled-components";

export const Heading = styled.h1`
    font-size:35px;
    line-height:50px;
    font-weight:500;
    color:${p => p.theme.primary};
    width:100%;
    max-width:450px;
    margin:20px auto;
    text-align:center;
`;

export const Text = styled.p`
    font-size:16px;
    line-height:30px;
    font-weight:400;
    color:${p => p.theme.secondary};
    width:100%;
    max-width:555px;
    margin:20px auto;
    text-align:center;
`;

export const CarouselContainer = styled.div`
    display:flex;
    column-gap:50px;
    overflow:auto;
    align-items:stretch;
    align-content:stretch;
    -ms-overflow-style:none;
    scrollbar-width:none;
    margin:60px 0;

    &::-webkit-scrollbar{
        display:none;
    }
`;

export const FlexContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:30px 120px 40px 0px;
`;

export const CarouselNav = styled.ul`
    display:flex;
    list-style:none;
    padding-left:0px;
`;

interface NavEleProps {
    active: boolean;
}
export const CarouselNavEle = styled.li<NavEleProps>`
    width:${p => {
        if (p.active) return "45px";
        return "15px";
    }};
    height:15px;
    border-radius:15px;
    background-color:${p => {
        if (p.active) return p.theme.focus;
        return "#DDE0E4";
    }};
    margin-right:7.5px;
    cursor:pointer;
`;

interface ButtonProps {
    dir: "right" | "left";
}
export const Button = styled.button<ButtonProps>`
    width:60px;
    height:60px;
    border:1px solid ${p => p.theme.focus};
    border-radius:50%;
    background-color:${p => {
        if (p.dir === "left") return "#fff";
        return p.theme.focus;
    }};
    color:${p => {
        if (p.dir === "left") return p.theme.focus;
        return "#fff";
    }};
    margin-left: 20px;
    cursor:${p => {
        if (p.disabled) return "no-drop";
        return "pointer"
    }};
`;