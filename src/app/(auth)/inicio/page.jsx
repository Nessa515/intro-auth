"use client"

import { getCookie } from "@/actions/handleCookie"
import { ApplicationContext } from "@/context/ApplicationContext"
import { signOut } from "next-auth/react"
import { useContext } from "react"


export default function InicioPage(){

    // capturar o token que está armazenado no cookie http only
    const { token, permissoes } = useContext(ApplicationContext)

    return(
        <>
            <h1>Página logada</h1>
            <div className="border border-red-500 p-2 m-2">
                { token }
            </div>
            <div>
                <h1>{ permissoes }</h1>
            </div>
            <button onClick={async () => {
                await signOut({
                    redirectTo: "/login"
                })
            }}>Logout</button>
        </>
    )
}
