import styled, {css} from "styled-components/native";

export const Wrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5,
})`
    ${({theme}) => css`
        border: 1px solid ${theme.colors.secondaryD1};
        width: 100px;
        height: 100px;

        border-radius: 100px;
    `}
`;

export const Tooltip = styled.Text`
    ${({theme}) => css`
        position: absolute;
        bottom: -8px;
        right: 8px;
        z-index: 1;

        font-size: ${theme.fonts.info};
        font-weight: bold;
        color: ${theme.colors.light};
        background-color: ${theme.colors.primary};
        width: 40px;
        text-align: center;
        border-radius: 5px;
    `}
`;