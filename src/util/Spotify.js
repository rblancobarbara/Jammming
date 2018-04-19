const clientId = "5c716839e03944d292029c2e4983c390";
const redirectUri = "http://localhost:3000/";

const userAccessToken = "";

const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    } else {
      let accessToken = window.location.href.match(/access_token=([^&]*)/);
      let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  },

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`).then(response => {
      //{
      //  headers: {Authorization: `Bearer ${accessToken}`}
      //}
      if (response.ok) {
        return response.json().map(track => [{
          id: track.id,
          name: track.name,
          artist: track.artist.name,
          album: track.album.name,
          URI: track.uri}]);
      }
      throw new Error("Request failed!");
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
      //Code to execute with jsonResponse
    });
  }
}

/*
    })

    { headers: {Authorization: `Bearer ${accessToken}`}
}

  }
}
*/
export default Spotify;
