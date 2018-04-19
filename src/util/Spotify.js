
const xhr = new XMLHttpRequest();
const url = "https://accounts.spotify.com/authorize";

xhr.responseType = "json";
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response); //Code to execute with response
  }
};

xhr.open("GET", url);
xhr.send();


const userAccessToken;

getAccessToken() {
  if (userAccessToken) {
    return access_token = userAccessToken;
  }
}
const urltoredirect = url + '?client_id=' + client_id + '&redirect_uri=' + redirect_uri + '&scope=' + scope + '&response_type=' + response_type + '&state=' + state
"https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123"

user:
password:
url=`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
const client_id="5c716839e03944d292029c2e4983c390"
const redirect_uri="http://localhost:3000/"
const scope="playlist-modify-public playlist-modify-private"
const response_type="token"
state: "123"

access_token:
token_type:
expires_in:
state:


let userAccessToken;

let Spotify = {


export default Spotify;

window.setTimeout(() => accessToken = '', expiresIn * 1000);
window.history.pushState('Access Token', null, '/');
