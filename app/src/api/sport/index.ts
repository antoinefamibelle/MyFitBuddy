import { sdk } from "../sdk";

export const getSports = async () => {
  const response = await sdk({
    method: 'GET',
    url: '/exo',
  });
  return response.data;
};