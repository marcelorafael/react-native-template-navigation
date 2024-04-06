import styled, {css} from "styled-components/native";

export const Wrapper = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    ${({theme}) => css`
        flex: 1;
        padding: 0 10px 100px 10px;
    `}
`;

export const SlideCenterView = styled.ScrollView`
    ${({theme}) => css`
        height: 100%;
        /* padding: 0 10px 0 10px; */
    `}
`;

export const Row = styled.View`
    ${({ theme }) => css`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 3px;
    `}
`;

export const Container = styled.View`
    ${({theme}) => css`
        margin: 5px 0 5px 0;
    `}
`;

export const TopContainer = styled.View`
    ${({theme}) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.neutralL0};
    `}
`;

export const ButtonTopContainer = styled.TouchableOpacity`
    ${({theme}) => css`
        color: ${theme.colors.neutralL0};
    `}
`;

export const SlideHorizontalCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    ${({theme}) => css`
        /* height: 110px; */
    `}
`;