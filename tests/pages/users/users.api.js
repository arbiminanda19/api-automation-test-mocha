import BaseAPI from "../base.api.js";

const prefixUserUrl = "/users";

export const UserAPI = {
  getUserDetail: (token, user_id) =>
    BaseAPI.get(`${prefixUserUrl}/${user_id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
};
