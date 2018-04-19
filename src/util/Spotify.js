const clientId = "5c716839e03944d292029c2e4983c390";
const redirectUri = "http://localhost:3000/";

const userAccessToken = "";

const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    } else {
      const accessToken = window.location.href.match(/access_token=([^&]*)/);
      const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
    }
  }
}

  search(handleTermChange.term, headers.Authorization) {
    return fetch("https://api.spotify.com/v1/search?type=track&q=TERM").then(response => {
      if (response.ok) {
        return response.json().map([track.id, track.name, track.artist[0].name, track.album.name, track.uri]);
      }
      throw new Error("Request failed!");
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
      //Code to execute with jsonResponse
    });
  }

/*
    })

    { headers: {Authorization: `Bearer ${accessToken}`}
}

  }
}
*/
export default Spotify;
