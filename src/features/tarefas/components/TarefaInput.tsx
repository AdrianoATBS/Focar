import { FaRegCheckCircle } from "react-icons/fa";


export default function TarefaInput(){
    return(
        <div className="pt-10 w-full  ">
            <div className="relative ">
                <FaRegCheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primaria"/>

                <input type="text" placeholder="Digite sua tarefa aqui..." 
                className="w-full p-3 rounded-lg border border-borda focus:outline-none focus:none
                pl-8 pr-25 text-texto-suave/25 shadow-lg"/>

                 <button className="
                 text-white p-2 rounded-lg
                 absolute right-2 top-1 bg-gradient-to-br from-primaria-escura to-primaria-clara
                 cursor-pointer hover:from-primaria-clara hover:to-primaria-escura transition-colors duration-300
                 active:scale-95">
                    Adicionar
            </button>
            </div>

           
        </div>

    )
}