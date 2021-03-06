import { fetch } from 'whatwg-fetch';

const baseUrl = process.env.REACT_APP_CONTACTS_API;

const defaultOptions = {
  headers: {
    Authorization: localStorage.getItem('jwt') || '',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  mode: 'cors',
};

export function isAuthenticated() {
  // check JWT expiration
  return defaultOptions.headers['Authorization'] !== '';
}

export async function register(data) {
  try{

  const resp = await fetch(`${baseUrl}/users`, {
    ...defaultOptions,
    method: 'POST',
    body: JSON.stringify(data),
   });
   const json = await resp.json();
   if (resp.status === 200) {
      defaultOptions.headers['Authorization'] = json.token;
      localStorage.setItem('jwt', json.token);
      return json;
   } else {
     throw new Error('error register');
   }
  }catch(err){
    console.log(err);
  }

  }

export async function login(credentials) {
  const resp = await fetch(`${baseUrl}/auth`, {
    ...defaultOptions,
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  const json = await resp.json();
  if (resp.status === 200) {
    defaultOptions.headers['Authorization'] = json.token;
    localStorage.setItem('jwt', json.token);
    return json
  } 
  return null;
}

export async function getAll() {
  const resp = await fetch(`${baseUrl}/contacts`, {
    ...defaultOptions,
    method: 'GET',
  });

  return resp.json();
}

export async function addContact(contact) {
  const resp = await fetch(`${baseUrl}/contacts`, {
    ...defaultOptions,
    method: 'POST',
    body: JSON.stringify(contact),
  });

  return resp.json();
}

export async function updateContact(contact) {
  const resp = await fetch(`${baseUrl}/contacts`, {
    ...defaultOptions,
    method: 'PUT',
    body: JSON.stringify(contact),
  });

  return resp.json();
}

export async function removeContact(_id) {
  const resp = await fetch(`${baseUrl}/contacts/${_id}`, {
    ...defaultOptions,
    method: 'DELETE',
  });

  return resp.json();
}

const contacts = {
  register,
  login,
  getAll,
  addContact,
  updateContact,
  removeContact,
};

export default contacts;
