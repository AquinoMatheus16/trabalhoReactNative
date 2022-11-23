import { useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export const Logout = () => {
    const { logoutContext } = useContext(AuthContext);

    useEffect(() => {
        logoutContext()
    }, []);

}