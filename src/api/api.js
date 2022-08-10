import { MARKETPLACE_URL, LOGIN_URL } from "./constants";


const makeRequest = async (url, body) => {
    return await fetch(url, {
        headers: {
            "Content-Type": "text/plain;charset=UTF-8"
        },
        method: "post",
        credentials: "include",
        referrerPolicy: "strict-origin-when-cross-origin", // no-referrer, origin, same-origin...
        referrer: "",
        mode: "no-cors", // same-origin, no-cors
        body: body
    });
};

export const login = async (username, password) => {
    console.log("Logging in");
    const loginPayload = {
        "sn": "Hitgrab",
        "hg_is_ajax": "0",
        "action": "loginHitGrab",
        "username": username,
        "password": password,
    };
    return await makeRequest(LOGIN_URL, JSON.stringify(loginPayload));
};

const generatePayload = (itemId) => {
    return {
        "sn": "Hitgrab",
        "hg_is_ajax": "0",
        "action": "get_item_listings",
        "item_id": itemId,
        "uh": "WS1NacBD",
        "last_read_journal_entry_id": 109499,
    }
}

export const getItemById = async (itemId) => {
    const payload = generatePayload(itemId);
    const resp = await makeRequest(
        MARKETPLACE_URL,
        JSON.stringify(payload)
    );
    const result = resp.body;
    return result;
} 