import { ENDPOINT_SYMBOLS } from '../endpoints';
import { TFetchPost } from './types';

export const fetchSymbols: TFetchPost = () => fetch(ENDPOINT_SYMBOLS);
