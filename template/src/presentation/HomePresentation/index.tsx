import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import * as S from './styles'
import Home from '../../screens/Home';
// import MiniCard from '../../components/@core/MiniCard';
import Button from '../../components/@core/Button';

import useAuth from '../../hooks/useAuth';

import auth from '@react-native-firebase/auth';
import CardQuantity from '../../components/@core/CardQuantity';
import MiniCard from '../../components/@core/MiniCard';

import useFirebaseFunctions from '../../hooks/useFirebaseFunctions';
import CircleCard from '../../components/@core/CircleCard';
import { BackgroundImage } from '../../screens/Home/styles';

import logout from '../../assets/icons/logout.png'

const HomePresentation = ({ navigation }: any) => {
  const { dataUser } = useAuth();
  const { handleSignOut } = useFirebaseFunctions();

  const name = 'Marcelo Azevedo';

  return (
    <Home title='Destaques'>
      <S.Wrapper>
        <TouchableOpacity onPress={() => handleSignOut()}>
          <Image source={logout} style={{width: 30, height: 30, position:'absolute', right:0}} />
        </TouchableOpacity>
        {/* <Button title='Cadastrar' onClick={() => navigation.navigate('RegisterUserPresentation')} />
        <Button title='Sair' onClick={() => handleSignOut()} /> */}

        {/* <S.Title style={{ marginBottom: 8 }}>Aniversariantes do mês</S.Title> */}

        <S.SlideHorizontalCards style={{ height: 120 }}>
          <View style={{ width: 110 }}>
            <CircleCard withLabel label='23/11'>
              <>
                <Image source={{ uri: 'https://media.licdn.com/dms/image/D5603AQF2qNYDl-36EQ/profile-displayphoto-shrink_100_100/0/1700517136342?e=1717027200&v=beta&t=q9dG1iR1Nab1ni2TrKhNopX_1hdjJsC2XREWyji3bKk' }} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
              </>
            </CircleCard>
            <Text style={{ color: 'gray', marginTop: 3 }}>{name.length > 11 ? name.substring(0, 11) + '...' : name}</Text>
            {/* {dataUser?.data()?.nome} */}
          </View>
        </S.SlideHorizontalCards>

        {/* <Text style={{ color: 'black' }}>{dataUser?.data()?.nome}</Text> */}

        {dataUser?.data()?.isAdmin && (<S.Container>
          <S.Title style={{ marginBottom: 8 }}>Dados Gerais</S.Title>
          <S.Row>
            <CardQuantity
              otherTitle='279'
              title='Pessoas'
              color='primary'
              icon={<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/166/166258.png' }} style={{ width: 30, height: 30 }} />}
            />
            <CardQuantity
              title='Total Crianças'
              otherTitle='2'
              color='primary'
              icon={<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/166/166258.png' }} style={{ width: 30, height: 30 }} />}
            />
          </S.Row>
          <S.Row>
            <CardQuantity
              otherTitle='55%'
              title='Total de Mulheres'
              color='primary'
              icon={<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/166/166258.png' }} style={{ width: 30, height: 30 }} />}
            />
            <CardQuantity
              otherTitle='44%'
              title='Total de Homens'
              color='primary'
              icon={<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/166/166258.png' }} style={{ width: 30, height: 30 }} />}
            />
          </S.Row>
        </S.Container>)}

        <S.Container>
          <MiniCard variant='medium'>
            <BackgroundImage
              source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipMGdX4R_hITIO6flpe2QsPhO4aOXcM0UKnQxk8=w650-h365-k-no' }} resizeMode='cover'
              style={{ height: '100%' }}
              borderRadius={5}
              blurRadius={2}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', margin: 10 }}>Nossa igreja está de portas abertas</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', margin: 10 }}> esperando por você. </Text>
              <Text style={{ color: 'white', fontWeight: 'bold', margin: 10 }}> I.B.P - Pedreira, Belém - PA, 68447-000 </Text>
              
            </BackgroundImage>
          </MiniCard>
        </S.Container>

        <S.Container>
          <S.TopContainer>
            <S.Title style={{ marginBottom: 8 }}>Estudos</S.Title>
            <S.ButtonTopContainer>
              <S.Title style={{ marginBottom: 8 }}>Ver todos</S.Title>
            </S.ButtonTopContainer>
          </S.TopContainer>

          <S.SlideHorizontalCards>
            <MiniCard
              variant='medium'
            >
              <>
                <ImageBackground
                  borderRadius={8}
                  style={{ flex: 3, justifyContent: 'center' }}
                  resizeMode='cover'
                  source={{ uri: 'https://i.ytimg.com/vi/E2BCjY97PIw/maxresdefault.jpg' }}
                >

                </ImageBackground>
                <View style={{ flex: 1 }}>
                  <S.Title>Estudo 01</S.Title>
                </View>
              </>
            </MiniCard>
            <View style={{ width: 5 }} />
            <MiniCard
              variant='medium'
            >
              <>
                <ImageBackground
                  borderRadius={8}
                  style={{ flex: 3, justifyContent: 'center' }}
                  resizeMode='cover'
                  source={{ uri: 'data:image/jpeg;base64,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' }}
                >

                </ImageBackground>
                <View style={{ flex: 1 }}>
                  <S.Title>Estudo 02</S.Title>
                </View>
              </>
            </MiniCard>
            <View style={{ width: 5 }} />
            <MiniCard
              variant='medium'
            >
              <>
                <ImageBackground
                  borderRadius={8}
                  style={{ flex: 3, justifyContent: 'center' }}
                  resizeMode='cover'
                  source={{ uri: 'https://i.ytimg.com/vi/PJXX34SuK-U/hqdefault.jpg?v=6600b7f9' }}
                >

                </ImageBackground>
                <View style={{ flex: 1 }}>
                  <S.Title>Estudo 03</S.Title>
                </View>
              </>
            </MiniCard>
          </S.SlideHorizontalCards>
        </S.Container>

        <View style={{ height: 220 }} />
      </S.Wrapper>
    </Home >
  );
}

export default HomePresentation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  card: {
    width: '50%',
    aspectRatio: 2, // Para manter a proporção retangular
    backgroundColor: 'lightblue',
    marginHorizontal: 3,
  },
});