import styled, { DefaultTheme, css } from "styled-components/native";

import { CardQuantityProps } from ".";

type WrapperTypes = Pick<CardQuantityProps, 'color'>

const wrapperModifiers = {
    primary: (theme: DefaultTheme) => css`
        color: ${theme.colors.primary};
    `,
    black: (theme: DefaultTheme) => css`
        color: ${theme.colors.secondaryD1};
    `,
    default: (theme: DefaultTheme) => css`
        color: ${theme.colors.light};
    `,
    blue: (theme: DefaultTheme) => css`
        color: ${theme.colors.blueRiver};
    `,
    error: (theme: DefaultTheme) => css`
        color: ${theme.colors.error};
    `,
    purple: (theme: DefaultTheme) => css`
        color: ${theme.colors.amethyst};
    `,
};

export const Wrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    ${({ theme }) => css`
        width: 50%;
        
        aspect-ratio: 2;
        
        background-color: ${theme.colors.light};
        
        margin: 0 3px 0 3px;

        elevation: 1;

        display: flex;

        flex-direction: row;

        align-items: center;

        border-radius: 5px;

        padding: 5px;

        /* width: 100%;

        height: 120px;

        background-color: ${theme.colors.light};

         */
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`

        font-size: ${theme.size.label};

        color: ${theme.colors.neutralL1};
    
    `}
`;

export const OtherTitle = styled.Text<WrapperTypes>`
    ${({ theme, color }) => css`

        font-size: ${theme.size.h4};

        ${!!color && wrapperModifiers[color](theme)}
    `}
`;

export const RightView = styled.View`
    ${({ theme }) => css`
        margin-left: 12px;
        justify-content: center;
        /* align-items: center; */
        width: 70%;
        height: 100%;
    `}
`;

export const LeftView = styled.View`
    ${({ theme }) => css`
        /* width: 30%; */
    `}
`;

