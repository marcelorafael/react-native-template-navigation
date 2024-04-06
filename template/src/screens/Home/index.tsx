import React from "react";
import * as S from './styles';

import { StatusBar } from "react-native";

const image = { uri: 'https://i.ytimg.com/vi/TRtNu_LfFjY/maxresdefault.jpg' }

export interface HomeProps {
    children?: JSX.Element;
    title?: string;
    name?: string;
}

const Home = ({ children, name, title }: HomeProps) => {
    return (
        <S.Wrapper>
            <StatusBar translucent backgroundColor='transparent' />
            <S.BackgroundImage
                source={image}
                resizeMode='cover'
                borderBottomLeftRadius={20}
                borderBottomRightRadius={20}
            >
                <S.Title>{title}</S.Title>
                {/* <S.Title>{name}</S.Title> */}
            </S.BackgroundImage>
            <S.CenterView>
                {children}
            </S.CenterView>
        </S.Wrapper>
    );
}

export default Home;