enum ROUTE_PATH {
  CURRENCY_CONVERTER = 'currency-converter',
  CONVERSION_HISTORY = 'conversion-history',
}

export const pathMapper: Record<string, string> = {
  '/conversion-history': 'conversion-history',
  '/': 'currency-converter',
};

export const routeMapper = {
  'currency-converter': '/',
  'conversion-history': '/conversion-history',
};

export const routes = [{}];
