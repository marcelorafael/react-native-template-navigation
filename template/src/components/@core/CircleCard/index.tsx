import React from 'react';
import * as S from './styles';

export interface CircleCardProps {
    children?: React.ReactElement;
    label?: string;
    withLabel?: boolean;
    onPress?: () => void;
}

export default function CircleCard({
    children,
    label = '',
    withLabel = false,
    onPress,
}: CircleCardProps) {
    return (
        <S.Wrapper
            onPress={onPress}
        >
            {withLabel && (<S.Tooltip>{label}</S.Tooltip>)}
            {children}
        </S.Wrapper>
    );
}