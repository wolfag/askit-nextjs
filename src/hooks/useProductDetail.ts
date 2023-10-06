import React from 'react';
import useSWR, { SWRConfiguration } from 'swr';

interface Props extends SWRConfiguration {
  id: string;
  enabled?: boolean;
}

export function useProductDetail({ id, enabled, ...options }: Props) {
  const fetcher = (param: string) =>
    fetch(`https://fakestoreapi.com/products/${param}`).then((res) =>
      res.json()
    );

  const response = useSWR<Product>(['products', id], () => fetcher(id), {
    ...options,
  });

  return response;
}
