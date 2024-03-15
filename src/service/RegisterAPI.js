import { api } from "./axiosConfigs";

export const RegisterAPI = {
  register: async function (payload) {
    const response = await api.request({
      url: `/register`,
      method: "POST",
      data: payload,
    })
    return response;
  },
}
