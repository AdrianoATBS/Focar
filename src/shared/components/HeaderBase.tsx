import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

export default function HeaderBase() {
    return(
        <header className="max-w-5xl mx-auto w-full flex items-center justify-between gap-6 pl-4 border-b-2 border-gray-200 py-4
            r">

            <div className="flex items-center gap-6">

                <Link href="/" >
                    <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
                
                <nav>
                    <ul className="flex items-center gap-4 ">
                        <li>
                            <Link href="/" className="titulo-3 hover:text-primaria-clara hover:border-b-2 border-primaria-clara ">
                                Tarefas
                            </Link>
                        </li>
                        <li>
                            <Link href="/focus" className="titulo-3 hover:text-primaria-clara hover:border-b-2 border-primaria-clara ">
                                Focus
                            </Link>
                        </li>
                        <li>
                            <Link href="/calendario" className="titulo-3 hover:text-primaria-clara hover:border-b-2 border-primaria-clara ">
                                Calendario
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4 pr-6">
                <IoIosNotificationsOutline size={24} className="text-secundaria cursor-pointer" />
                <IoSettingsSharp size={24} className="text-secundaria cursor-pointer" />
                <FaRegUserCircle size={24} className="text-secundaria cursor-pointer" />
            </div>

         
        </header>
    )
}