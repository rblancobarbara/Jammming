const clientId = "5c716839e03944d292029c2e4983c390";
const redirectUri = "http://localhost:3000/";

const accessToken = "";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      let accessToken = window.location.href.match(/access_token=([^&]*)/);
      let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  },

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
    let accessToken = this.props.accessToken;
    let headers = {headers: {Authorization: `Bearer ${accessToken}`}};
    let userId;

    fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response => {
      if (response.ok) {
        return response.json();
        //how to extract the id parameter and save to the user ID variable,
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {

      //Code to execute with jsonResponse
  });

  fetch("https://api.spotify.com/v1/users/{user_id}/playlists", {
    headers: "headers", //??
    method: "POST",
    body: JSON.stringify({id: "200"})
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!");
  }, networkError => console.log(networkError.message)
).then(jsonResponse => {
  //Code to execute with jsonResponse
});
}


}

export default Spotify;
