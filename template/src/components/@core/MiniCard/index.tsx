import React from 'react';
import { View, Text, Image } from 'react-native';
import * as S from './styles'

export type VariantType = 'small' | 'medium' | 'large';
export type BackgroundType = 'primary' | 'black' | 'default' | 'blue' | 'error' | 'purple';

export interface MiniCardProps {
  children?: React.ReactElement;
  variant?: VariantType;
  background?: BackgroundType;
}

const MiniCard = ({
  children,
  variant = 'small',
  background = 'default',
}: MiniCardProps) => {
  return (
    <S.Wrapper variant={variant} background={background}>
      {children}
    </S.Wrapper>
  );
}

export default MiniCard;
