// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes

const clientId = "5e50334c81e64dcfb14af1e27c5c44df";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// export const getTokenFromResponse = () => {
//   return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       var parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);

//       return initial;
//     }, {});
// };

export const hashParams =()=>{ return window.location.hash.substr(1).split('&').reduce((acc, item) => {
  const parts = item.split('=');
  acc[parts[0]] = decodeURIComponent(parts[1]);
  return acc;
}, {});
}

// if (hashParams.access_token) {
//   const accessToken = hashParams.access_token;
//   console.log('Access Token:', accessToken);
//   // Now you can use the access token to make requests to the Spotify Web API
// }

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;