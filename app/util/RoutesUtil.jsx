
export function searchLocationLink(location) {
  return {
    pathname: '/',
    query: { location },
  };
}

export default {
  searchLocationLink,
};
