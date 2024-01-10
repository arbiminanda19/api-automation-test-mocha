import BaseAPI from "../base.api.js";

export const AuthAPI = (data) => BaseAPI.post(`/authentications`, data);
