import { fetch } from 'whatwg-fetch';

const baseUrl = process.env.REACT_APP_CONTACTS_API;

const defaultOptions = {
    headers: {
        'Authorization': localStorage.getItem('jwt') || '',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'cors'
};

export function isAuthenticated () {
    // check JWT expiration
    console.log(defaultOptions.headers['Authorization'] !== '');
    return defaultOptions.headers['Authorization'] !== '';
}
export async function login (credentials) {
    const resp = await fetch(`${baseUrl}/auth`, {
        ...defaultOptions,
        method: 'POST',
        body: JSON.stringify(credentials)
    });

    const json = await resp.json();
    console.log('json', json);
    defaultOptions.headers['Authorization'] = json.token;
    localStorage.setItem('jwt', json.token);
    return json;
}


export async function getAll () {
    const resp = await fetch(`${baseUrl}/contacts`, {
        ...defaultOptions,
        method: 'GET'
    });

    return resp.json();
}

