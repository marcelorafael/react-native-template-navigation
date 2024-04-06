import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import Login from '../../screens/Login';

import { Alert, View } from 'react-native';

import useAuth from '../../hooks/useAuth';
import useFirebaseFunctions from '../../hooks/useFirebaseFunctions';

const LoginPresentation = ({ navigation }: any) => {
  const { handleSignIn, getDataUser } = useFirebaseFunctions();
  const { handleSetDataUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signIn() {
    if (email === '' || password === '') {
      Alert.alert('Atenção!', 'Preencha todos os campos')
      return;
    }

    try {
      setLoading(true);
      const data = await handleSignIn(email, password);
      const dataUser: any = await getDataUser(data);

      handleSetDataUser(dataUser);

      setLoading(false);
    } catch (error) {
      Alert.alert('IBP informa', 'Erro ao tentar realizar o login, verifique se seu e-mail e senha estão corretos.')
      setLoading(false);
    }
  }

  function handleForgotPassword() {
    if (email === '') {
      Alert.alert('Atenção!', 'Preencha o campo o email que deseja recuperar a senha.')
      return;
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Redefinir senha', 'Enviamos um email para você'))
      .catch(error => console.log('ERROR FORGOTPASSWORD: ', error))
  }

  return (
    <View style={{ flex: 1 }}>
      <Login
        loading={loading}
        disabled={loading}
        onChangeTextEmail={(email) => setEmail(email)}
        onChangeTextPasswr={(password) => setPassword(password)}
        onClickRegister={() => navigation.navigate('RegisterUserPresentation')}
        onClickForgot={handleForgotPassword}
        onClick={() => signIn()}
      />
    </View>
  );
}

export default LoginPresentation