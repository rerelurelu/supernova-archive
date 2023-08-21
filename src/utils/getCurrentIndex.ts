export const getCurrentIndex = (pathname: string): string => {
  const regex = /\/(\d+)\//g;
  const matches = pathname.match(regex);

  if (!matches) {
    return '1';
  }

  const currentIndex = matches[matches.length - 1].replaceAll('/', '');

  return currentIndex;
};
