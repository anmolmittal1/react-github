export const search = async (
  token: string,
  type: string,
  query: string,
  page: number | string = 1,
  per_page: number | string = 10
) => {
  const url =
    `https://api.github.com/search/${type}?` +
    `q=${query}&per_page=${per_page}&page=${page}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return {
    data,
    status: response.status,
  };
};
