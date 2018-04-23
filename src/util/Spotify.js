const clientId = "5c716839e03944d292029c2e4983c390";
const redirectUri = "http://localhost:3000/";

let accessToken = "";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    let expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      let expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
    //console.log(accessToken);
  },


  /*
correct code

  getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
        return accessToken;
      } else {
        const accessUrl = https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri};
        window.location = accessUrl;
      }
    },
*/

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {
      if (response.ok) {
        return response.json().map(track => [{
          id: track.id,
          name: track.name,
          artist: track.artist[0].name,
          album: track.album.name,
          uri: track.uri}]);
      }
      throw new Error("Request failed!");
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        if (jsonResponse.ok) {
          return jsonResponse().map(track => [{
            id: track.id,
            name: track.name,
            artist: track.artist[0].name,
            album: track.album.name,
            uri: track.uri
          }])
        }
    });
  },

  savePlaylist(playlistName, trackUris) {
    let accessToken = Spotify.getAccessToken();
    let header = {headers: {Authorization: `Bearer ${accessToken}`}};
    let userId;
    let playlistId;

    return fetch('https://api.spotify.com/v1/me', {headers: header}
        ).then(response => response.json()
        ).then(jsonResponse => {
          userId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: header,
            method: "POST",
            body: JSON.stringify({name: playlistName})
          }).then(response => response.json()
          ).then(jsonResponse => {
            playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
              headers: header,
              method: "POST",
              body: JSON.stringify({name: trackUris})
            }).then(response => response.json()
            ).then(jsonResponse => {

              //Code to execute with jsonResponse

            })
          });
        })
      }
    }

export default Spotify;
