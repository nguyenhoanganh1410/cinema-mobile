import axiosApi from "./axisosApi";

const showApi = {
  getShow: () => {
    return axiosApi.get("/show");
  },
  createShow: (data) => {
    return axiosApi.post("/show", data);
  },
  updateShow: (id, data) => {
    return axiosApi.put(`/show/${id}`, data);
  },
  deleteShow: (id) => {
    return axiosApi.delete(`/show/${id}`);
  },

};

export default showApi;
