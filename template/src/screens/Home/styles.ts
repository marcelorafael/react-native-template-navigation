import styled, {css} from "styled-components/native";

export const Wrapper = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundDefault};

        /* padding: 10px; */
    `}
`;

export const CenterView = styled.View`
    ${({theme}) => css`
        padding: 10px;

        height: 100%;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.light};
        /* font-weight: bold; */

        font-size: ${theme.size.h5};

        position: absolute;
        top: 15px;
        left: 10px;

        /* text-align: center;

        margin-top: 10px; */
    `}
`;

export const BackgroundImage = styled.ImageBackground`
    ${({theme}) => css`
        width: 100%;
        height: 220px;
    `}
`;