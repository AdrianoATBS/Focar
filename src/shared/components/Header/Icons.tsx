import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
export default function Icons() {
    return(
        <>
            <IoIosNotificationsOutline size={24} className="text-secundaria cursor-pointer" />
            <IoSettingsSharp size={24} className="text-secundaria cursor-pointer" />
            <FaRegUserCircle size={24} className="text-secundaria cursor-pointer" />
        </>
    )
}