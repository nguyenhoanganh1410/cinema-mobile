import axiosApi from "./axisosApi";

const userApi = {
  login: (phone, password) => {
    return axiosApi.post("/auth/login", {
      phone,
      password,
    });
  },

  signup: (data) => {
    return axiosApi.post("/auth/signup", data )
  },
};

export default userApi;
