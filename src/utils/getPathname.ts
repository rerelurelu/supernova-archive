export const getPathname = (inputString: string): string => {
  if (inputString === '/') {
    return 'home';
  }

  const regex = /\/([^/]+)\//g;
  const matches = inputString.match(regex);

  if (!matches) {
    return '';
  }

  return matches[0].replaceAll('/', '');
};
