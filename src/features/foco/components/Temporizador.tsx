import ExibirTemporizador from "./ExibirTemporizador";
import TemporizadorControles from "./TemporizadorControle";
export default function Temporizador() {
    return(
        <div className=" flex flex-col items-center justify-center gap-10
        max-w-7xl mx-auto mt-5">
            <ExibirTemporizador />
            <TemporizadorControles />
        </div>
    )
}