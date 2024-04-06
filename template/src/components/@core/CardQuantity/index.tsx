import React from 'react';
import * as S from './styles'

export type ColorType = 'primary' | 'black' | 'default' | 'blue' | 'error' | 'purple';

export interface CardQuantityProps {
  title?: string;
  otherTitle?: string;
  icon?: React.ReactElement;
  color?: ColorType
}

const CardQuantity = ({
  icon,
  color = 'default',
  otherTitle = '',
  title = '',
}: CardQuantityProps) => {
  return (
    <S.Wrapper>
      <S.LeftView>{icon}</S.LeftView>
      <S.RightView>
        <S.OtherTitle color={color}>{otherTitle}</S.OtherTitle>
        <S.Title>{title}</S.Title>
      </S.RightView>
    </S.Wrapper>
  );
}

export default CardQuantity;
