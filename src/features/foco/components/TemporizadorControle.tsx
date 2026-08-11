"use client"
import { SetStateAction } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { Dispatch } from "react";

interface TemporizadorControlesProps {
    rodando: boolean;
    alternarTemporizador: () => void;
}
export default function TemporizadorControles({ rodando, alternarTemporizador }: TemporizadorControlesProps) {
      

    return(
        <div className="w-full flex items-center justify-center gap-10 mb-10 mt-5">
                <div className="flex justify-center items-center " >

                <button className="cursor-pointer bg-linear-to-br
                    from-primaria-escura to-primaria-clara text-white p-4 rounded-full
                    brightness-80 hover:brightness-100
                    hover:from-primaria-clara
                    hover:to-primaria-escura transition-colors duration-300 active:scale-95"
                    onClick={() => {
                        alternarTemporizador();
                    }}>
                        {rodando ? <FaPause /> : <FaPlay />}
                    </button>
                    
                </div>
        </div>
    )
}
                  