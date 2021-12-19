import styled from "styled-components";

interface Props {
    focus: boolean
}
export const CardContainer = styled.div<Props>`
    width: calc(100% - 80px);
    max-width:340px;
    border-radius: 10px;
    border: 2px solid ${p => p.focus ? p.theme.focus : "#ddd"};
    overflow:hidden;
    padding:30px;
    flex-shrink:0;
`;

export const FlexContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const Image = styled.img`
    width:50px;
    height:50px;
    object-fit:cover;
    border-radius:50%;
`;

export const UserName = styled.p`
    font-size:18px;
    line-height:24px;
    font-weight:500;
    margin:0;
    padding:0;
    color:${p => p.theme.primary};
`;
export const Address = styled.p`
    font-size:14px;
    color:${p => p.theme.secondary};
    line-height:18px;
    font-weight:400;
    margin:0;
    padding:0;
`
export const Rating = styled.p`
    font-size:16px;
    font-weight:400;
    color:${p => p.theme.primary};
    line-height:30px;
`;

export const Comment = styled.p`
    font-size:16px;
    line-height:30px;
    font-weight:400;
    color:${p => p.theme.primary};
`;