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

  updateCustomer: (id,data) => {
    return axiosApi.put(`/customer/${id}`, data);
  },
  updatePassword: (id,data) => {
    return axiosApi.put(`/customer/update-password/${id}`, data);
  },

  getCustomer: (id) => {
    return axiosApi.get(`/customer/${id}`);
  },
  
};

export default userApi;
