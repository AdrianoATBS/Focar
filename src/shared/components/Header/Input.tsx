import { CiSearch } from "react-icons/ci";

type InputProps = {
    size?: "sm" | "md" | "lg";
}
export default function Input({ size }: InputProps) {
    return(
        <div className="relative">
            <CiSearch size={20} className="absolute left-2 top-1/2 transform -translate-y-1/2
             text-secundaria/25 " />
           <input type="text" placeholder="" 
           className={`border bg-superficie border-borda rounded-full px-4 pl-6
            py-2 focus:outline-none caret-secundaria/25 text-secundaria/30
            ${size === "sm" && "h-8 px-2"}
            ${size === "md" && "h-8 px-3"}
            ${size === "lg" && "h-8 px-4 w-full"}
           `}/> 
        </div>
    )
}