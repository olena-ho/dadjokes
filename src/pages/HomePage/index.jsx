import { useState, useEffect } from "react";
import { Joke } from "../../components/Joke";

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json"
      );
      const data = await response.json();
      setJokes(data);
    };
    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}
    </div>
  );
};
