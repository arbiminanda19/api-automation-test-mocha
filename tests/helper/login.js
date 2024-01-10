import { AuthAPI } from "../pages/authentications/authentications.api.js";

export const login = async (data_login) => {
  const response = await AuthAPI(data_login);
  return {
    token: response.data.data.accessToken,
    userId: response.data.data.user.id,
  };
};
