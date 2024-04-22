import { buildApiUrl, buildComicsApiUrl } from '../../../../adapters/api/buildApiUrl';

describe('buildApiUrl', () => {
  it('returns the correct URL without search query', () => {
    const expectedUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=50&apikey=12bcb82570057829e28513a85d0c78ce&hash=21c65676f13c349c8cbeea0605c3b4ee';
    expect(buildApiUrl()).toEqual(expectedUrl);
  });

  it('returns the correct URL with search query', () => {
    const searchQuery = 'Spider';
    const expectedUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=50&apikey=12bcb82570057829e28513a85d0c78ce&hash=21c65676f13c349c8cbeea0605c3b4ee&nameStartsWith=${encodeURIComponent(searchQuery)}`;
    expect(buildApiUrl(searchQuery)).toEqual(expectedUrl);
  });
});

describe('buildComicsApiUrl', () => {
  it('returns the correct URL', () => {
    const characterId = 1017603; // Example character ID
    const expectedUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&limit=20&apikey=12bcb82570057829e28513a85d0c78ce&hash=21c65676f13c349c8cbeea0605c3b4ee`;
    expect(buildComicsApiUrl(characterId)).toEqual(expectedUrl);
  });
});
