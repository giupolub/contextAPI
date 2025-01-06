import { createContext, useState } from "react"

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if (email == "giuseppe.po@hotmail.com" && senha == "123456") {
            setUsuario({
                nome: "Giuseppe",
                email: email,
                endereco: "Embu das Artes - SP",
                telefone: "(11) 99999-9999"
            })
            return "ok"
        } else {
            return "Email e/ou senha incorreto(s)"
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            login,
            usuario
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}