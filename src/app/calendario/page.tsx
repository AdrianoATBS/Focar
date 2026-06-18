import CalendarioContainer from "@/features/calendario/components/CalendarioContainer";
import HeaderCalendario from "@/features/calendario/components/HeaderCalendario";
import Sidebar from "@/shared/components/Sidebar";
export default function Calendario() {
    return(
        <main className="w-full flex h-screen ">
            <Sidebar/>
            <div className="flex flex-1 flex-col h-screen overflow-y-auto">
                <HeaderCalendario />
                <CalendarioContainer />
            </div>
        </main>
    )
}