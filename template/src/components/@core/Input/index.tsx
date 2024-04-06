import React from 'react';
import { View, Text, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import * as S from './styles'

export interface InputProps{
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (val: string) => void;
}

const Input  = ({value, placeholder, secureTextEntry = false, onChangeText}:InputProps) => {
  return (
    <View>
      <S.Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor='gray'
        cursorColor='#E97812'
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default Input;
