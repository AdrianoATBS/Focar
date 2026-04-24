import Image from "next/image";
import Link from "next/link";
export default function Logo() {
    return(
        <div>
            <Link href="/" >
                <Image src="/logo.png" alt="Logo" width={80} height={80} 
                className="w-20 h-auto"/>
            </Link>
        </div>
    )
}