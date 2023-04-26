// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
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
  console.log(await fetchWebApi('v1/me/top/tracks?time_range=short_term&limit=5', 'GET').items)

  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}
