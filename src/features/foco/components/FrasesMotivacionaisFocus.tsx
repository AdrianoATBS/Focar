import { FraseMotivacionaisFocus  } from "../mocks/frasesMotivacionaisFocus";
interface FrasesMotivacionaisFocusProps {
    frases: readonly FraseMotivacionaisFocus[];
}

export default function FrasesMotivacionaisFocus({ frases }: FrasesMotivacionaisFocusProps) {
    const hoje = new Date().getDate();
    const indiceDoDia = hoje % frases.length;
    const fraseMotivacional = frases[indiceDoDia].texto;

    return(
        <div className="w-full max-w-3xl flex items-center justify-center p-2 ">
            <h1 className="titulo-1 text-center">{fraseMotivacional}</h1>
        </div>
    )
}