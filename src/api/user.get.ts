import authAxios from "./client";

// -----------Get All Profiles--------------
export const GetAllProfiles = (id: number) => {
  let result = authAxios.get(`api/profiles?id=${id}`); //dummy endpoint
  return result;
};
