import HeaderBase from "@/shared/components/Header/HeaderBase";
import Logo from "@/shared/components/Header/Logo";
import Nav from "@/shared/components/Header/Nav";
import Icons from "@/shared/components/Header/Icons";
import TarefaContainer from "@/features/tarefas/components/TarefaContainer";
import Sidebar from "@/shared/components/Sidebar";
import { getTodos } from "@/features/tarefas/services/getTodos";


export default async function Home() {
  const tarefas = await getTodos();

  return (
    <main className="w-full flex flex-col h-full">  
        
        <HeaderBase 
          left={<>
            <Logo />
            <Nav />
          </>}
          right={<Icons />}
          
          />
          <div className="flex flex-1 ">
            <Sidebar/>
            <TarefaContainer todos={tarefas.todos}/>
          </div>

       
    
    </main>
  );
}
