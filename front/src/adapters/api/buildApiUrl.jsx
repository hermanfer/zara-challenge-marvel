export function buildApiUrl(searchQuery = "") {
  const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
  const queryParams = {
    ts: 1,
    limit: 50,
    apikey: "12bcb82570057829e28513a85d0c78ce",
    hash: "21c65676f13c349c8cbeea0605c3b4ee",
  };

  if (searchQuery !== "") {
    queryParams.nameStartsWith = encodeURIComponent(searchQuery);
  }

  const queryString = new URLSearchParams(queryParams).toString();
  return `${baseUrl}?${queryString}`;
}

export function buildComicsApiUrl(characterId) {
  const baseUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics`;
  const queryParams = {
    ts: 1,
    limit: 20,
    apikey: "12bcb82570057829e28513a85d0c78ce",
    hash: "21c65676f13c349c8cbeea0605c3b4ee",
  };
  const queryString = new URLSearchParams(queryParams).toString();
  return `${baseUrl}?${queryString}`;
}
