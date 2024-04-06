import React from 'react';
import { View, Text, Image } from 'react-native';
import * as S from './styles'
import Input from '../../components/@core/Input';
import Button from '../../components/@core/Button';


const image = require('./logo2.png');


export interface LoginProps {
  valueEmail?: string;
  valuePasswr?: string;
  loading?: boolean;
  disabled?: boolean;
  onChangeTextEmail?: (text: string) => void;
  onChangeTextPasswr?: (text: string) => void;
  onClickRegister?: () => void;
  onClickForgot?: () => void;
  onClick?: () => void;
}

const Login = ({
  valueEmail,
  valuePasswr,
  loading,
  disabled,
  onClickRegister,
  onChangeTextEmail,
  onChangeTextPasswr,
  onClickForgot,
  onClick,
}: LoginProps) => {
  return (
    <S.Wrapper>
      <S.Head>
        <S.Image source={image} />
        {/* <S.Text>Igreja Batista da Pedreira</S.Text> */}
      </S.Head>
      <S.CenterView>
        <Input
          value={valueEmail}
          placeholder='email'
          onChangeText={onChangeTextEmail}
        />
        <Input
          value={valuePasswr}
          placeholder='******'
          secureTextEntry
          onChangeText={onChangeTextPasswr}
        />
        <View style={{marginBottom: 20}} />
        <Button
          title='Acessar'
          variant='container'
          loading={loading}
          disabled={disabled}
          onClick={onClick}
        />
        <Button
          title='Não tem registro? clique aqui'
          variant='text'
          color='primary'
          onClick={onClickRegister}
        />
        <Button
          title='Esqueci a senha'
          variant='text'
          color='primary'
          onClick={onClickForgot}
        />
      </S.CenterView>
    </S.Wrapper>
  );
}

export default Login;
