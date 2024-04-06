import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import useAuth from './useAuth';

import auth from '@react-native-firebase/auth';
import firstore from '@react-native-firebase/firestore';

export default function useFirebaseFunctions() {
    const { handleSetUser, handleGetUser } = useAuth();

    function handleSignIn(email: string, password: string) {
        return new Promise((resolve) => {

            try {
                let dataUser = auth().signInWithEmailAndPassword(email, password);
                resolve(dataUser)
            } catch (error) {
                resolve(error);
            }

        })

    }

    function handleSignOut() {
        auth().signOut();
        // handleSetDataUser(null);
        handleSetUser(null);
    }

    function handleNewUser(nome: string, email: string, password: string, setLoading: any, isAdmin: boolean) {
        setLoading(true);
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firstore().collection('users')
                    .doc(uid).set({
                        nome: nome,
                        createdAt: new Date(),
                        isAdmin: isAdmin
                    })
                // .then(() => {
                //     let data = {
                //         uid: uid,
                //         nome: nome,
                //         email: value.user.email,
                //         isAdmin
                //     }

                //     setDataUser(data);
                // })
                Alert.alert('IBP Informa', 'Usuário cadastrado com sucesso')
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

    function getDataUser(signedData: any) {
        return new Promise((resolve) => {
            try {
                const value: any = firstore()
                .collection('users')
                .doc(signedData?.user?.uid)
                .get()

                resolve(value)
            } catch (error) {
                resolve(error)
            }
        })

    }

    return {
        handleSignIn,
        handleSignOut,
        handleNewUser,
        getDataUser,
    }
}

