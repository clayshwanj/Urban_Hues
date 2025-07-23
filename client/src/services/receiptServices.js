import axios from "axios";

export const getUserReceipts = async (userId) => {
  const res = await axios.get(`/api/receipts/${userId}`);
  return res.data;
};
