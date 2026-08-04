import { useEffect, useRef, useState } from "react";

export function useTemporizador() {
    const [tempo, setTempo] = useState(1500);

    const [rodando, setRodando] = useState<boolean>(false);

    
        useEffect(() => {
            if(rodando){
            const intervalo = setInterval(() => {
                setTempo((prevTempo) => {
                    if (prevTempo <= 0) {
                        setRodando(false);
                        return 0;
                    }
                    return prevTempo - 1;
                });
            }, 1000);

            return () => clearInterval(intervalo);
            }
        }, [rodando]);

        
        const adicionarTempo = () => {
            setTempo((prevTempo) => prevTempo + 300);
        };
        const resetarTempo = () => {
            setTempo(1500);
        }
        const diminuirTempo = () => {
            setTempo((prevTempo) => Math.max(prevTempo - 300, 0));
        }
       
            
    return { tempo, rodando,
        setRodando, adicionarTempo, resetarTempo, diminuirTempo, 
       };
}