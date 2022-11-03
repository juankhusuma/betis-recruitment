import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface Payload<T> {
  data: T | null | undefined;
  loading: boolean;
  error: Error | null | undefined;
}

export async function useGetRequest<T>(url: string): Promise<Payload<T>> {
  const [error, setError] = useState<Error | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null | undefined>(null);
  try {
    setData((await axios.get(url)).data);
  } catch (e: any) {
    setError(e);
  }
  setLoading(false);
  return { data, loading, error };
}

export async function usePostRequest<T, U extends Object>(
  url: string,
  body: U,
  config?: AxiosRequestConfig
): Promise<Payload<T>> {
  const [error, setError] = useState<Error | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null | undefined>(null);
  try {
    setData(await (await axios.post(url, body, config)).data);
  } catch (e: any) {
    setError(e);
  }
  setLoading(false);
  return { data, loading, error };
}

export async function usePutRequest<T, U extends Object>(
  url: string,
  body: U,
  config?: AxiosRequestConfig
): Promise<Payload<T>> {
  const [error, setError] = useState<Error | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null | undefined>(null);
  try {
    setData(await (await axios.put(url, body, config)).data);
  } catch (e: any) {
    setError(e);
  }
  setLoading(false);
  return { data, loading, error };
}

interface DeleteConfig<T> extends AxiosRequestConfig {
  data: T;
}

export async function useDeleteRequest<T, U extends Object>(
  url: string,
  config?: DeleteConfig<U>
): Promise<Payload<T>> {
  const [error, setError] = useState<Error | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null | undefined>(null);
  try {
    setData(await (await axios.delete(url, config)).data);
  } catch (e: any) {
    setError(e);
  }
  setLoading(false);
  return { data, loading, error };
}
