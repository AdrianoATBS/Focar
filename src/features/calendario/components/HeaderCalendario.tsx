import HeaderBase from "@/shared/components/Header/HeaderBase";
import Input from "@/shared/components/Header/Input";
import Logo from "@/shared/components/Header/Logo";
import Icons from "@/shared/components/Header/Icons";
export default function HeaderCalendario() {
    return(
        <header className="w-full">
            <HeaderBase left={<div className="flex items-center justify- gap-13">
                <Input />

                </div>}
                right={<>
                    
                    <Icons/>
                </>}
                
                />
            
        </header>
    )
}