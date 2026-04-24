import TituloGenericoTarefa from "./TituloGenericoTarefa";
import { frasesMotivacionais } from "../mocks/frasesMotivacionais.mock";
export default function TarefaContainer(){
    return(
        <div className="max-w-3xl mx-auto w-full p-6">
            <TituloGenericoTarefa frasesMotivacionais={frasesMotivacionais}/>
        </div>
    )
}