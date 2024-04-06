import styled,{css} from 'styled-components/native';

export const Wrapper = styled.View`
    ${({theme}) => css`
        flex: 2;
        background-color: #E97812;
        justify-content: flex-end;
    `};
`;

export const CenterView
 = styled.View`
    ${({theme}) => css`
        background-color: ${theme.colors.neutralL3};

        border-top-left-radius: 100px;

        width: 100%;
        height: 70%;

        display: flex;

        justify-content: space-between;

        padding: 150px 15px 150px 15px;
    `};
`;

export const Head = styled.View`
    ${({theme}) => css`
        width: 100%;
        align-items: center;
    `};
`;

export const Image = styled.Image`
    ${({theme}) => css`
        /* position: absolute;
        top: 10px;
        left: 10px; */

        border-radius: 20px;

        width: 200px;
        height: 200px;
    `};
`;

export const Text = styled.Text`
    ${({theme}) => css`
       margin-bottom: 10px;
       color: ${theme.colors.neutralL2};

       font-size: ${theme.size.h3};
    `};
`;