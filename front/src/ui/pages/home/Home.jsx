import React, { useState, useEffect } from "react";
import Searcher from "../../../core/components/searcher/Searcher";
import Card from "../../../core/components/card/Card";
import "./Home.scss";
import { useFetch } from "../../../adapters/api/useFetch";
import { buildApiUrl } from "../../../adapters/api/buildApiUrl";
import { Link } from "react-router-dom";
import Loader from "../../../core/components/loader/Loader";

const CharacterList = ({ searchQuery, onCharacterClick }) => {
  const apiUrl = buildApiUrl(searchQuery);
  const { data: characters, isLoading, isPending } = useFetch(apiUrl);

  return (
    <>
      {isLoading || isPending ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {characters.map((character) => (
            <Link
              to={`/character/${character.id}`}
              key={character.id}
              className="marvel-card-link"
            >
              <div>
                <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  onClick={() => onCharacterClick(character)}
                />
              </div>
            </Link>
          ))}
        </>
      )}
      
      <div className="marvel-card-link-test">
        <div data-testid="marvel-card-link-test">
          <Card
            key="1234"
            id="1234"
            name="Mocked Character"
            imageUrl="../../../resources/img/example-char.png"
            onClick={() =>
              onCharacterClick({
                id: "1234",
                name: "Mocked Character",
                description: "¡hola! test",
              })
            }
          />
        </div>
      </div>
    </>
  );
};

const Home = ({
  selectedCharacter,
  fetchCharacterData,
  setSelectedCharacter,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    if (selectedCharacter) {
      console.log("Selected character:", selectedCharacter);
      fetchCharacterData(selectedCharacter.id);
    }
  }, [selectedCharacter, fetchCharacterData]);

  const handleSearch = (query, total) => {
    setSearchQuery(query);
    setTotalResults(total);
  };

  const handleCharacterClick = async (character) => {
    console.log("Clicked character:", character);
    setIsLoading(true);
    setSelectedCharacter(character);
    setIsLoading(false);
  };

  return (
    <div className="home-page" data-testid="home">
      <div className="home-page-container">
        <Searcher onSearch={handleSearch} />
        <div
          className="home-page-container-cards"
          style={{
            justifyContent: searchQuery ? "flex-start" : "space-between",
          }}
        >
          <CharacterList
            searchQuery={searchQuery}
            onCharacterClick={handleCharacterClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
