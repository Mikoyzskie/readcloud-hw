import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";

export default function usersQueryOptions() {
 return queryOptions({
  queryKey: ["users"],
  queryFn: getUsers,
 });
}
