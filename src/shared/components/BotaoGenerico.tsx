"use client";
interface BotaoGenericoProps {
    texto: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function BotaoGenerico({ texto, onClick, className }: BotaoGenericoProps) {
    return(
        <button onClick={onClick} 
        className={className} >
            {texto}
        </button>
    )
}