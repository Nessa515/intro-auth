"use server";

import { cookies } from "next/headers";

// export function getCookie() {

// }

export const getCookie = async (name) => {
    const cookieStore = await cookies()
    const data = cookieStore.get(name)
    return data?.value
}

export const createCookie = async (data, expires) => {
    const cookieStore = await cookies()
    cookieStore.set(data, expires, {
        httpOnly: true,
        expires: new Date(expires * 1000),
        sameSite: "strict",
        path: "/"
    })
}

export const deleteCookie = async (name) => {
    const cookieStore = await cookies()
    const deletedCookie = cookieStore.delete(name)
    return deletedCookie
}