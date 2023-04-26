import React from 'react'

const token = 'BQBslEL6kn9YPKwZ6X4RDJYeWehUeLHdLvMqBch2229p95LGBD_VzP-h0qqhkms55y_2JumI7L-ZQKf9rAXvAvyGIDoDtSOivkJ2seMdlrJwQx0CryD5cMV_UBNiSubh9LiIa-OYcZKUAk2whB7Z7dL8c9wiB2MqE2veE4OvKr67BoTLAVy6ChfuGFGxhQmqX_uB_xIptSfup63-hVj0DkOpwJexSuS0eBafahqJoiIfgvPxcYpEl1nR8EJmwDm92wl15W0eKJEQvBzmPu4Y_ZDfX3QVgGA2q2VEkV_I_kmvSppxIdXqPyMYY4Z2nf_fKesoBuDEuJsf7kXzFu7OASP74kiFb9pq';

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks

  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const arr = [1, 2, 3]
const arrList = arr.map((num) => <li key={num.toString()}>{num}</li>)

console.log(fetchWebApi('v1/me/top/tracks?time_range=short_term&limit=5', 'GET').items)

export const TopSongs = () => {
    return(
        <div className="top-songs">
            <h1>Hello</h1>
            <ul>{arrList}</ul>
        </div>
    )
}