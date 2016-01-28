module.exports = {

  request: {
    path: 'https://api.github.com/search/users',
    method: 'GET',
  },

  response: {
    data: {
      total_count: 1,
      incomplete_results: false,
      items:
        [{
      avatar_url: "https://avatars.githubusercontent.com/u/11804133?v=3",
      events_url: "https://api.github.com/users/ashdl76/events{/privacy}",
      followers_url: "https://api.github.com/users/ashdl76/followers",
      following_url: "https://api.github.com/users/ashdl76/following{/other_user}",
      gists_url: "https://api.github.com/users/ashdl76/gists{/gist_id}",
      gravatar_id: "",
      html_url: "https://github.com/ashdl76",
      id: 11804133,
      login: "ashdl76",
      organizations_url: "https://api.github.com/users/ashdl76/orgs",
      received_events_url: "https://api.github.com/users/ashdl76/received_events",
      repos_url: "https://api.github.com/users/ashdl76/repos",
      score: 8.327232,
      site_admin: false,
      starred_url: "https://api.github.com/users/ashdl76/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ashdl76/subscriptions",
      type: "User",
      url: "https://api.github.com/users/ashdl76",
    }] // This is the return value for the matched request
    // status: 500 The HTTP status code for the mocked response. This is an optional field.
  }
  }
};


// te metes en sources, pones un break en el controller en la linea 7, refrescas, haces una busqueda y vuelves a la consola.
// En consola metes response.data (necesitamos los items) y ahi te salen todos los items
