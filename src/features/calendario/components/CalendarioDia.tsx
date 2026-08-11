interface CalendarioDiaProps {
    dataAtual: Date;
  
}
export default function CalendarioDia({  dataAtual }: CalendarioDiaProps) {
    const hoje = new Date();

    const diasNoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate();
    const diaPrimeiroDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
    const diaDaSemanaPrimeiroDoMes = diaPrimeiroDoMes.getDay();
    const diasNoMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
    
    const diasAnterior = Array.from({ length: diaDaSemanaPrimeiroDoMes }, 
        (_, i) => diasNoMesAnterior - diaDaSemanaPrimeiroDoMes + i + 1);
    const diasAtuais = Array.from({ length: diasNoMes }, (_, i) => i + 1);
   
    const diaDestaqueMes = hoje.getMonth() === dataAtual.getMonth() 
    && hoje.getFullYear() === dataAtual.getFullYear() ? 
    hoje.getDate() : null;
    
   
    return(
        <div className="grid grid-cols-7 gap-5 mt-4 ">
            {diasAnterior.map((dia, index) => (
                <div key={`prev-${index}`} className=" h-20
                 flex items-center justify-center   border
                  border-[#BCCBB9]/15 rounded-lg relative
                 ">
                    <span className="text-[#CBD5E1] text-base text absolute left-4 top-2">{dia}</span>
                </div>
            ))}
            {diasAtuais.map((dia) => {
                const EhHoje = dia === diaDestaqueMes;
                return(
                    <div key={dia} className={`h-20 flex items-center justify-center text-sm 
                    rounded-lg relative border border-[#BCCBB9]/15
                    ${EhHoje ? 'bg-[#006E2F] text-white rounded-xl' : 'bg-[#F2F4F6] '}`}>
                        <span className="text-base text absolute left-4 top-2 text-[#191C1E]'}" >{dia}</span>
                    </div>
                );
            })}
           
        </div>
    )
}