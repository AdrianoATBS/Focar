import HeaderFoco from "@/features/foco/components/HeaderFoco";
import Sidebar from "@/shared/components/Sidebar";
import Temporizador from "@/features/foco/components/Temporizador";
export default function Foco() {
    return(
        <main className="w-full flex flex-col h-full ">
            <HeaderFoco />

            <div className="flex flex-1">
                <Sidebar />
                <Temporizador />
            </div>
        </main>
    )
}