import CalendarioDia from "./CalendarioDia";
interface CalendarioProps {
    diaAtual: number;
    dataAtual: Date;
   
}
export default function Calendario({ dataAtual }: CalendarioProps) {
    const semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return(
        <div className="w-full h-full bg-superficie rounded-lg shadow-lg p-4 ">
            <div className="grid grid-cols-7 gap-5 px-4 py-10  ">
                {semana.map((dia) => (
                    <p key={dia} className="text-sm text-[#94A3B8] font-extrabold
                     flex items-center justify-center">
                        {dia}
                    </p>
                ))}
            </div>
            <CalendarioDia dataAtual={dataAtual} />
        </div>
    )
} 