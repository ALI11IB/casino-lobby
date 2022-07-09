import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import { useFetch } from "../../components/common/useFetch";
import { GameCard, Filter } from "../../components/ui";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  const [query, setQuery] = useState("");

  const { games, searchedGames, hasMore, loading, error } = useFetch(
    pageNumber,
    query
  );

  const observer = useRef() as React.MutableRefObject<IntersectionObserver>;
  const lastGamelementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <section className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 sm:mx-10 xsm:mx-10">
        <Filter setQuery={setQuery} />
      </section>

      <section className="grid xsm:grid-cols-1   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 sm:m-10 xsm:m-10">
        {searchedGames && searchedGames.length
          ? searchedGames.map((game, index) => (
              <Link to={`/${game.id}`} ref={lastGamelementRef}>
                <GameCard game={game} key={game.id} index={index} />
              </Link>
            ))
          : games.map((game, index) => (
              <Link to={`/${game.id}`} ref={lastGamelementRef}>
                <GameCard game={game} key={game.id} index={index} />
              </Link>
            ))}
        <div>{loading && "Loading..."}</div>
        <div>{error && "Error"}</div>
      </section>
    </>
  );
}
