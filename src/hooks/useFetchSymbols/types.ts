export type TUseFetchSymbolsResult = {
  data: string[];
  refetch(): Promise<void>;
  loading: boolean;
  isError: boolean;
};

export type TUseFetchSymbols = (id?: number) => TUseFetchSymbolsResult;
