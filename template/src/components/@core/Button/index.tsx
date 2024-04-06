/* eslint-disable prettier/prettier */
import React from 'react';

import * as S from './styles';

export type VariantTypes = 'outline' | 'container' | 'text';
export type ColorstTypes = 'primary' | 'secondary' | 'default';
export type IconLocale = 'left' | 'right';

export interface ButtonProps {
  title?: string;
  variant?: VariantTypes;
  fullWidth?: boolean;
  color?: ColorstTypes;
  loading?: boolean
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'outline',
  fullWidth = false,
  color = 'primary',
  loading = false,
  disabled = false,
  onClick,
}) => {
  return (
    <S.Wrapper
      onPress={onClick}
      variant={variant}
      fullWidth={fullWidth}
      color={color}
      disabled={disabled}
    >
      {!loading
        ? <S.TextButton color={color} variant={variant} style={{ transform: [{ translateX: -10 }] }}>
          {title}
        </S.TextButton>
        : <S.Loading />
      }

    </S.Wrapper >
  );
};

export default Button;
