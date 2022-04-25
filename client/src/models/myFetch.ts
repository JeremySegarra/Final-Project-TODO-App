const API_URL = "http://localhost:3001/api/";

export async function api(url: string) {
  return fetch(API_URL + url).then((res) => res.json());
}

export function modulerApi(
  url: string,
  body?: any,
  method?: string,
  headers?: HeadersInit
) {
  let options: RequestInit = { headers };
  console.log("Im inside my fetch modulerAPI, and the body is", body);
  console.log("The url is", url);

  //means ?? OR
  //this is when we are sending a body
  if (body) {
    options = {
      method: method ?? "POST",
      cache: "no-cache", //only important if your doing a POST
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    };
  }

  //now we pass options to the fetch function
  return fetch(API_URL + url, options).then((response) => response.json());
}

export async function apiLogin(url: string, body: {}) {
  const res = await fetch(API_URL + url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const data = await res.json();
    console.log("this is the data in MyFetch", data);

    throw data;
  }

  const parsedBody = await res.json();

  return parsedBody;
}

//this function is to replace the signup fetch in pinia users.ts

// export async function apiSignup(url: string, body: {}) {
//   return fetch(API_URL + url, {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
// }
