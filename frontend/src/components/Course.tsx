import { BiGroup } from "react-icons/bi";
import {useState} from "react";
import { IoCloseCircle } from "react-icons/io5";

import { useQuery } from "@tanstack/react-query";
import usersQueryOptions from "../options/usersQueryOptions"
import Loading from "./Loading";
type Properties = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Course({ _id, title, description, imageUrl }:Properties) {
  
  const [showDetails, setShowDetails] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { data, isFetching } = useQuery(usersQueryOptions(_id))

  return (
    <>
      <div onClick={() => { setShowDetails(true) }} className="py-2 flex justify-between items-center border-b border-gray-300 w-full">
        <div className="flex flex-col gap-1 items-start">
          <p className="font-bold">{title}</p>
          <p className="text-xs font-semibold text-slate-400">{description}</p>
        </div>
        <div className="flex items-center gap-1">
          <BiGroup size={25} />
          <p className="font-bold">{data?.length}</p>
        </div>
      </div>
      {showDetails &&
        (
        <div className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] border-0 overflow-auto flex items-center justify-center hover:cursor-pointer p-4">
          <div className="flex flex-col bg-white rounded-lg p-4 relative gap-5">
            {isLoading 
             && <div className="max-w-[400px] max-h-[200px] h-full w-full bg-slate-300 animate-pulse" />
            }
            <img src={imageUrl} alt="Course Banner" className="rounded-lg" onLoad={() => setIsLoading(false)} />
            <div className="">
              <p className="font-bold">{title}</p>
              <p className="text-sm text-slate-400">{description}</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-sm border-b border-slate-300 w-full text-start pb-2">Enrolled</p>
              <div className="flex flex-col w-full items-start">
                {isFetching ? <Loading/> :
                  data?.map((enrollee) => (
                    <div className="flex justify-around p-2 w-full items-center border-b border-slate-300">
                      <p>{enrollee.name}</p>
                      <p className="text-sm">{enrollee.email}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <button onClick={()=> setShowDetails(false)} className="absolute top-6 right-7 drop-shadow-2xl">
              <IoCloseCircle size={25} className="text-white"/>
            </button>
          </div>
        </div>
        )
      }
      
    </>
  )
}
