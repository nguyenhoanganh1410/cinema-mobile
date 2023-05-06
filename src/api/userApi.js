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

  getMemberShip: (id) => {
    return axiosApi.get(`/customer/membership/${id}`);
  },
};

export default userApi;
