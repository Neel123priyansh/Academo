import { useNavigate} from "react-router-dom" 
import Avatar from '../assets/Avatar.png'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function HeaderDB() {
  const navigate = useNavigate()

  return (
    <>
      <div className="absolute z-10 w-[20%] ml-10 flex flex-col bg-[#abe7e7] rounded-3xl h-[95%] shadow-[rgba(0,_0,_0,_0.3)_0px_30px_90px] mt-5">
        <div className="h-20 gap-6 px-2 py-3 flex flex-row rounded-t-3xl w-full bg-[#ECEFF1] hover:text-black">
            <img src={Avatar} className="size-14 object-cover rounded-full"></img>
            <div className="flex flex-col">
            <h1 className=" h-auto font-Nunito mt-2 text-2xl w-auto">Priyansh Neel</h1>
            <div className="text-xs text-secondary-400">Joined in Augest 2023</div>
            </div>
        </div>
        <ul className="flex gap-4 font-work-sans flex-col text-xl text-left p-2 mt-6 text-black  bg-[#abe7e7]">
          <li onClick={() => navigate("/Dash")} className=" pl-6 h-14 pt-3 transform motion-safe:hover:scale-105 transition-all rounded-md duration-300 ease-in-out hover:bg-[#30CFD0] bg-[#abe7e7] hover:text-black">
            <AutoGraphIcon className="mr-4"/>Dashboard
          </li>
          <li className=" pl-6 h-14 pt-3  transition-all rounded-md duration-300 ease-in-out hover:bg-[#30CFD0] transform motion-safe:hover:scale-105 hover:text-black">
            <LaptopChromebookIcon className="mr-4"/> Attendance System
          </li>
          <li onClick={()=>navigate("/Trainer")} className=" pl-6 h-14 pt-3  transition-all rounded-md duration-300 ease-in-out hover:bg-[#30CFD0] transform motion-safe:hover:scale-105 hover:text-black">
          <NoteAddIcon className="mr-4"/> Internal Assissment
          </li>
          <li onClick={()=>navigate("/Time")} className=" pl-6 h-14 pt-3  transition-all rounded-md duration-300 ease-in-out hover:bg-[#30CFD0] transform motion-safe:hover:scale-105 hover:text-black">
          <PrecisionManufacturingIcon className="mr-4"/> Class_Owl.Ai
          </li>
          <li onClick={()=>navigate("/Search")} className=" pl-6 h-14 pt-3  transition-all rounded-md duration-300 ease-in-out hover:bg-[#30CFD0] transform motion-safe:hover:scale-105 hover:text-black">
          <PersonSearchIcon className="mr-4"/> Search Faculty
          </li>
          <li onClick={()=>navigate("/Event")} className=" pl-6 h-14 pt-3  transition-all rounded-md duration-300 ease-in-out hover:bg-[#30CFD0] transform motion-safe:hover:scale-105 hover:text-black">
          <CalendarMonthIcon className="mr-4"/> Event Planner
          </li>
          <li className=" pl-6 h-14 pt-3  transition-all rounded-md duration-300 ease-in-out hover:bg-[#30CFD0] transform motion-safe:hover:scale-105 hover:text-black">
          <ScheduleIcon className="mr-4"/> COMING SOON
          </li>
        </ul>
      </div>
    </>
  )
}


