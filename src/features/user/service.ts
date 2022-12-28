export const getCurrentUser = async (authToken: string) => {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${authToken}`,
      Accept: "application/vnd.github+json",
    },
  });
  const data = await response.json();
  return {
    data,
    status: response.status,
  };
};

export const getUser = async (authToken: string, username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const data = await response.json();
  return {
    data,
    status: response.status,
  };
};
