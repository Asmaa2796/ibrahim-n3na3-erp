import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../apis/usersApi";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};