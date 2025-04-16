import {queryOptions} from "@tanstack/react-query";
import {getCourses} from "../api/getCourses";

export default function coursesQueryOptions() {
  return queryOptions({
   queryKey: ["courses"],
   queryFn: getCourses,
  });
}