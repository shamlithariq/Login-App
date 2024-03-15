import { api } from "./axiosConfigs";

export const LoginAPI = {
  login: async function (payload) {
    const response = await api.request({
      url: `/token`,
      method: "POST",
      data: payload,
    })
    return response;
  },
}
