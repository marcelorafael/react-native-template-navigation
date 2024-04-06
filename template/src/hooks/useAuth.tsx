import { useContext } from "react";

import { AuthContext } from "../contexts/auth";

function useAuth() {
    const {
        signed,
        handleSetUser,
        handleGetUser,
        dataUser,
        handleSetDataUser,
        handleGetDataUser
    }: any = useContext(AuthContext);

    return {
        signed,
        handleSetUser,
        handleGetUser,
        dataUser,
        handleSetDataUser,
        handleGetDataUser
    }
}

export default useAuth