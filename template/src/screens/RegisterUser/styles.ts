import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    ${({ theme }) => css`
        flex: 1;
        padding: 0 10px 0 10px;
    `}
`;

export const Header = styled.View`
    ${({ theme }) => css`
        margin-top: 20px;
        align-items: center;
        background-color: orange;
        border-radius: 10px;
        background-color: ${theme.colors.primary};
        elevation: 5;
    `}
`;