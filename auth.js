import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            credencial: {},
            senha: {}
        },
        authorize: async (credentials) => {
            let response = fetch('https://frotas-api.app.fslab.dev/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    credencial: credentials.credencial,
                    senha: credentials.senha
                })
            })

            let data = await response.json()

            if(!data.error) {
                // Criar arquivo handleCookie
                await createSession(data.data.token, data.data.payload.exp);
                return{
                    ...data.data.payload
                }
            }

            return null;
        }
    })
  ],
})