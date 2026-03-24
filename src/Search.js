// src/Search.js
import React, { useState, useEffect } from "react";
import useCache from "./hooks/useCache";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, saveCache, deleteCache } = useCache();

  useEffect(() => {
    if (data) {
      setSearchTerm(data.searchTerm);
    }
  }, [data]);

  const handleSearch = () => {
    const newCacheData = { searchTerm };
    saveCache({
      data: newCacheData,
      currentStep: "search",
      expiresAt: Date.now() + 15 * 60 * 1000,
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          {data && data.searchTerm ? (
            <div>
              <h2>Cached Data:</h2>
              <p>Previous Search Term: {data.searchTerm}</p>
              <button onClick={() => deleteCache()}>Clear Cache</button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Search;
