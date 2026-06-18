import CalendarioContainer from "@/features/calendario/components/CalendarioContainer";
import HeaderCalendario from "@/features/calendario/components/HeaderCalendario";
import SidebarCalendario from "@/features/calendario/components/SidebarCalendario";
export default function Calendario() {
  
    return(
        <main className="w-full flex h-screen ">
            <SidebarCalendario />
            <div className="flex flex-1 flex-col h-screen overflow-y-auto">
                <HeaderCalendario />
                <CalendarioContainer />
            </div>
        </main>
    )
}