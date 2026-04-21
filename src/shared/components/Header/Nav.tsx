import Link from "next/link";
export default function Nav() {
    return(
        <nav>
            <ul className="flex items-center gap-4 ">
                <li>
                    <Link href="/" className="texto hover:text-primaria-clara hover:border-b-2 border-primaria-clara ">
                        Tarefas
                    </Link>
                </li>
                <li>
                    <Link href="/focus" className="texto hover:text-primaria-clara hover:border-b-2 border-primaria-clara ">
                        Focus
                    </Link>
                </li>
                <li>
                    <Link href="/calendario" className="texto hover:text-primaria-clara hover:border-b-2 border-primaria-clara ">
                        Calendario
                    </Link>
                </li>
            </ul>
        </nav>
    )
}