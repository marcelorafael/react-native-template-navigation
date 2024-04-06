import styled,{css} from 'styled-components/native';

export const Input = styled.TextInput`
    ${({theme}) => css`
        width: 100%;
        /* background-color: ${theme.colors.neutralL1}; */
        border-bottom-color: ${theme.colors.primary};
        border-bottom-width: 1px;

        border-radius: 5px;

        padding: 10px;

        font-size: ${theme.size.h4};

        color: ${theme.colors.primary};
    `};
`;
