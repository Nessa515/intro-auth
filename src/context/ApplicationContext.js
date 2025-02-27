"use client"

import { createContext, useState } from "react"

export const ApplicationContext = createContext({})

export function ApplicationProvider({ token, permissoes, children }){

    const [tokenState, setTokenState] = useState(token)

    return(
        <ApplicationContext
            value={{
                token: tokenState,
                permissoes: permissoes
            }}
        >
            { children }
        </ApplicationContext>
    )

}
