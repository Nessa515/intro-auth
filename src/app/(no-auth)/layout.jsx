import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function NoAuthLayout({ children }) {

    const session = await auth()

    if (session) {
        redirect("/inicio")
    }

    return <>{children}</>
}
