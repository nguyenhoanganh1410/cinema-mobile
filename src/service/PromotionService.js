import promotionApi from "../api/promotionApi";


export const checkPromotionCinema = async (data) => {
  try {
    const response = await promotionApi.checkPromotion(data)
    return response;
  } catch (error) {
    throw error;
  }
};
