import Image from "next/image";
import Link from "next/link";


type HeaderBaseProps = {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
    
}

export default function HeaderBase( { left, center, right }: HeaderBaseProps ) {
    return(
        <header className=" w-full flex items-center justify-between gap-6 pl-4 border-b-2
         border-borda/25 py-4
            r">

            <div className="flex items-center gap-6">
                {left}
            </div>

            <div className="flex-1 flex justify-center">
                {center}
            </div>

            <div className="flex items-center gap-4 pr-6">
                {right}
            </div>

         
        </header>
    )
}