import styled, { DefaultTheme, css } from "styled-components/native";

import { MiniCardProps } from ".";

type WrapperTypes = Pick<MiniCardProps, 'variant' | 'background'>

const wrapperModifiers = {
    small: () => css`
        width: 150px;
        height: 150px;
    `,
    medium: () => css`
        width: 350px;
        height: 180px;
    `,
    large: () => css`
        width: 300px;
        height: 350px;
    `,
    primary: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.primary};
    `,
    black: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.secondaryD1};
    `,
    default: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.light};
    `,
    blue: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.blueRiver};
    `,
    error: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.error};
    `,
    purple: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.amethyst};
    `,
};

export const Wrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
}) <WrapperTypes>`
    ${({ theme, variant, background }) => css`
        

        /* padding: 5px; */

        background-color: ${theme.colors.light};

        border-radius: 5px;

        elevation: 5;

        ${!!variant && wrapperModifiers[variant]()}
        ${!!background && wrapperModifiers[background](theme)}
    `}
`;