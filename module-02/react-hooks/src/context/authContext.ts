import { createContext } from "react"

export interface IUser {
    email: string,
    password: string
}

interface IAuthContext {
    user: IUser,
    login: (user: IUser) => void;
    logout: () => void;
}

const authContextDefaultValues: IAuthContext = {
    user: {
        email: "",
        password: ""
    },
    login: (user: IUser) => {},
    logout: () => {}
}

const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

export default AuthContext;