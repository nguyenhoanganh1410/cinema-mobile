import movieApi from "../api/movieApi";
import showApi from "../api/showApi";

export const getFilmById = async (id) => {
  try {
    const data = await movieApi.getMovieById(id);
    return data;
  } catch (error) {
    throw error;
  }
};
