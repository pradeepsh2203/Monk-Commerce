import styled from "styled-components";

interface Props {
    focus: boolean
}
export const CardContainer = styled.div<Props>`
    width: calc(100% - 2* var(--padding-sides));
    max-width:340px;
    border-radius: 10px;
    border: 2px solid ${p => p.focus ? p.theme.focus : "#ddd"};
    overflow:hidden;
    padding:30px;
    flex-shrink:0;

    @media (max-width:500px){
        padding:20px;
    }
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
    
    @media (max-width:500px){
        width:40px;
        height:40px;
    }
`;

export const UserName = styled.p`
    font-size:18px;
    line-height:24px;
    font-weight:600;
    margin:0;
    padding:0;
    color:${p => p.theme.primary};

    @media (max-width:500px){
        font-size: 14px;
        line-height:20px;
    }
`;
export const Address = styled.p`
    font-size:14px;
    color:${p => p.theme.secondary};
    line-height:18px;
    font-weight:400;
    margin:0;
    padding:0;

    @media (max-width:500px){
        font-size: 10px;
        line-height:15px;
    }
`
export const Rating = styled.p`
    font-size:16px;
    font-weight:400;
    color:${p => p.theme.primary};
    line-height:30px;

    @media (max-width:500px){
        font-size: 12px;
        line-height:20px;
    }
`;

export const Comment = styled.p`
    font-size:16px;
    line-height:30px;
    font-weight:400;
    color:${p => p.theme.primary};
`;