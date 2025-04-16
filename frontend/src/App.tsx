import './App.css';
import Loading from "./components/Loading";
import Course from "./components/Course";
import { useQueries } from "@tanstack/react-query";
import coursesQueryOptions from "./options/coursesQueryOptions"
import usersQueryOptions from "./options/usersQueryOptions"


function App() {
  
  const [{ data, error, isFetching }, users] = useQueries({ queries: [coursesQueryOptions(), usersQueryOptions()]});

  if(error){
    alert("Something went wrong");
  }

  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4 max-w-[700px] w-full'>
          <h1 className='font-bold text-4xl'>Courses</h1>
          <p className='text-sm text-gray-400 font-semibold'>Browse our available courses and see how many students are enrolled.</p>
        </div>
        <div className='flex flex-col'>
          <div className='border-b border-gray-300 pb-2 flex justify-between'>
            <p className='font-bold text-sm'>Course</p>
            <p className='font-bold text-sm'>Enrollments</p>
          </div>
          <div className=''>
            {isFetching
              ? <Loading /> 
              : (data?.map((course, index) => <Course key={index} {...course} users={users.data}/>))
            }
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
