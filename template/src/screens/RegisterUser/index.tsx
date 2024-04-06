import React from 'react';
import * as S from './styles';

import logo1 from '../../assets/icons/logo1.png'
import Input from '../../components/@core/Input';
import Button from '../../components/@core/Button';
import { View } from 'react-native';
import { Image } from '../Login/styles';

export interface RegisterUserProps {
    valueName?: string;
    valueEmail?: string;
    valueSenha?: string;
    isLoading?: boolean;
    onChangeTextName?: (text: string) => void;
    onChangeTextEmail?: (text: string) => void;
    onChangeTextSenha?: (text: string) => void;
    onClick?: () => void;
}

const RegisterUser = ({
    valueName,
    valueEmail,
    valueSenha,
    isLoading,
    onChangeTextName,
    onChangeTextEmail,
    onChangeTextSenha,
    onClick,
}: RegisterUserProps) => {
    return (
        <S.Wrapper>
            <S.Header>
                <Image source={logo1} style={{}} />
            </S.Header>
            <Input
                value={valueName}
                placeholder='Nome'
                onChangeText={onChangeTextName}
            />
            <Input
                value={valueEmail}
                placeholder='Email'
                onChangeText={onChangeTextEmail}
            />
            <Input
                value={valueSenha}
                placeholder='Senha'
                secureTextEntry
                onChangeText={onChangeTextSenha}
            />
            <View style={{ marginBottom: 20 }} />
            <Button
                title='Cadastrar'
                variant='container'
                loading={isLoading}
                onClick={onClick}
            />
        </S.Wrapper>
    );
}

export default RegisterUser;