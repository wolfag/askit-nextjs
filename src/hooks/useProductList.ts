import useSWR, { SWRConfiguration } from 'swr';

export function useProductList(option?: Partial<SWRConfiguration>) {
  const fetcher = () =>
    fetch('https://fakestoreapi.com/products').then((res) => res.json());

  const res = useSWR<Product[]>('productList', fetcher, {
    refreshInterval: 1000,
    ...option,
  });

  return res;
}
