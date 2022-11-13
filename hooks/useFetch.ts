import { useState } from "react";

interface Payload<T> {
  data: T | null | undefined;
  loading: boolean;
  error: Error | null | undefined;
}

export async function useFetch<T>(
  url: string,
  conf: RequestInit
): Promise<Payload<T>> {
  const [error, setError] = useState<Error | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null | undefined>(null);
  try {
    const res = await fetch(url, conf);
    setData(await res.json());
  } catch (e: any) {
    setError(e);
  }
  setLoading(false);
  return { data, loading, error };
}
