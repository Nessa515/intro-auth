import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import { ApplicationProvider } from "@/context/ApplicationContext";
import { getCookie } from "@/actions/handleCookie";


export default async function AuthLayout({ children }) {
    
    const session = await auth()

    // Capturar o token
    const token = await getCookie("access_token")
    const permissoes = await getCookie("permissoes")

    if (!session) {
        redirect("/login")
    }
    return (
        <ApplicationProvider token={token} permissoes={permissoes}>
            <>{children}</>
        </ApplicationProvider>
    )

}
