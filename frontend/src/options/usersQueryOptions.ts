import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";

export default function usersQueryOptions(id:string) {
 return queryOptions({
  queryKey: ["users", id],
  queryFn: ()=>getUsers(id),
 });
}
