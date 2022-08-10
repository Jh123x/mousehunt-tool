import axios from "axios";
import { MARKETPLACE_URL, LOGIN_URL } from "./constants";

axios.defaults.withCredentials = true;

export const login = async (username, password) => {
    return axios.post(LOGIN_URL, {
        "sn": "Hitgrab",
        "hg_is_ajax": "0",
        "action": "loginHitGrab",
        "username": username,
        "password": password,
    });
}

const generateCookie = (hgToken) => {
    return `has_logged_in=true;HG_TOKEN=${hgToken}`;
}

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

export const getItemById = async (hgToken, itemId) => {
    const cookie = generateCookie(hgToken);
    const payload = generatePayload(itemId);
    const response = await axios.post(MARKETPLACE_URL, payload, {
        headers: {
            'Content-Type': 'application/json',
            "Cookie": cookie,
        },
        credentials: "same-origin"
    });
    return response.data;
} 