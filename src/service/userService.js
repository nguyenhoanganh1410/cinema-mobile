import reservationApi from "../api/reservationApi";
import userApi from "../api/userApi";

export const SignUpUser = async (data) => {
  try {
    const dataResult = await userApi.signup(data);
    return dataResult;
  } catch (error) {
    console.log("fetch failed!!", error);
    throw error;
  }
};


