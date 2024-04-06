import React, { useState } from 'react';

import useFirebaseFunctions from '../../hooks/useFirebaseFunctions';

import RegisterUser from '../../screens/RegisterUser';

const RegisterUserPresentation = () => {
  const { handleNewUser } = useFirebaseFunctions();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);


  return (
    <RegisterUser
      onChangeTextName={(text: string) => setNome(text)}
      onChangeTextEmail={(text: string) => setEmail(text)}
      onChangeTextSenha={(text: string) => setSenha(text)}
      isLoading={isLoading}
      onClick={() => handleNewUser(nome, email, senha, setIsLoading, isAdmin)}
    />
  );
};

export default RegisterUserPresentation;