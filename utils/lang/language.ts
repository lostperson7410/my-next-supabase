import { isEmpty } from "lodash";
import Document from "next/document";
import { cookies } from "next/headers";

async function getCookieValue(cookieName: string) {

    const cookieStore = cookies();
    if (!isEmpty(cookieStore?.get(cookieName))) {
        return cookieStore?.get(cookieName)?.value
    }
    return undefined;
}

// Usage example
export async function getNextLocaleValue() {
    const nextLocaleValue = await getCookieValue('NEXT_LOCALE');
    return nextLocaleValue;
}
// console.log(nextLocaleValue);