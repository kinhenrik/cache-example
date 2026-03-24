// src/hooks/useCache.js
import { useState, useEffect } from "react";

const CACHE_KEY = "search-cache";

function useCache() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveCache = (cacheData) => {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  };

  const getCache = () => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    return cachedData ? JSON.parse(cachedData) : null;
  };

  const deleteCache = () => {
    localStorage.removeItem(CACHE_KEY);
  };

  useEffect(() => {
    const cachedData = getCache();
    if (cachedData) {
      setData(cachedData.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return { data, loading, saveCache, deleteCache };
}

export default useCache;
