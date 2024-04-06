import styled, { DefaultTheme, css } from 'styled-components/native';

import { ButtonProps } from '.';
import { VariantTypes } from '.';
import { ColorstTypes } from '.';
const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  container: (color: string) => css`
    background-color: ${color};
  `,

  outline: (color: string) => css`
    border: 1px solid ${color};
  `,

  text: (color: string) => css`
    background-color: ${color};
  `,
};

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
}) <ButtonProps>`
  ${({ theme, variant, fullWidth, color }) => css`
    height: 50px;
    border-radius: 8px;

    min-width: 50px;

    padding: 5px;

    align-items: center;
    justify-content: center;

    ${variant === 'container' &&
    wrapperModifiers.container(
      color === 'primary'
        ? theme.colors.primary
        : color === 'secondary'
          ? theme.colors.error
          : theme.colors.neutralL4,
    )}

    ${variant === 'outline' &&
    wrapperModifiers.outline(
      color === 'primary'
        ? theme.colors.primary
        : color === 'secondary'
          ? theme.colors.error
          : theme.colors.neutralL4,
    )}

    ${variant === 'text' && wrapperModifiers.text('transparent')}

    ${!!fullWidth && wrapperModifiers.fullWidth()}
  `}
`;

function colorFunc(theme: DefaultTheme, color: ColorstTypes, variant: VariantTypes) {
  if (variant === 'text') {
    return theme.colors.secondary
  }

  if (color === 'primary' && variant === 'container') {
    return theme.colors.primary
  }


  // ${color === 'primary' && variant !== 'text'
  //     ? theme.colors.light
  //     : color === 'secondary' && variant !== 'text'
  //       ? theme.colors.light
  //       : theme.colors.primary}
  return 'red'
}

export const TextButton = styled.Text<ButtonProps>`
  ${({ theme, color, variant }) => css`
    color: ${variant === 'container' ? theme.colors.light : theme.colors[color]};

    font-size: ${theme?.fonts?.title};

    font-weight: bold;
  `}
`;

export const Loading = styled.ActivityIndicator.attrs(({theme}) => ({
  size: 30,
  color: theme.colors.error
}))<ButtonProps>`
  ${({ theme, color, variant }) => css`

    
  `}
`;