import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const createPost = async (newPost) => {
  const res = await api.post("/posts", newPost);
  return res.data;
};