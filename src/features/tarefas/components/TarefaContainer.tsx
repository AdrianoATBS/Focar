import TituloGenericoTarefa from "./TituloGenericoTarefa";
import { frasesMotivacionais } from "../mocks/frasesMotivacionais.mock";
import TarefaInput from "./TarefaInput";
import TarefaFiltro from "./TarefaFiltro";

export default async function TarefaContainer(){
    

    return(
        <div className="max-w-3xl mx-auto w-full p-6">
            <TituloGenericoTarefa frasesMotivacionais={frasesMotivacionais}/>
            <TarefaInput/>
            <TarefaFiltro />
            
        </div>
    )
}