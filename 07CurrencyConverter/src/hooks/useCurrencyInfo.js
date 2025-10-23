import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        return res.json();
      })
      .then((res) => {
        if (res.result === "success") {
          setData(res.rates);
        } else {
          throw new Error("API returned an error");
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setData({});
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [currency]);

  return { data, error, loading };
}

export default useCurrencyInfo;