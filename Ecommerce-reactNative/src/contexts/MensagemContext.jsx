import { createContext } from "react";

export const MensagemContext = createContext()

export const MensagemProvider = ({ children }) => {
    return (
        <MensagemContext.Provider value={{ mensagem: "Alguma mensagem" }}>
            {children}
        </MensagemContext.Provider>
    )
}