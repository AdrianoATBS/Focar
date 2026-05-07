import HeaderBase from "@/shared/components/Header/HeaderBase";
import Icons from "@/shared/components/Header/Icons";
import Logo from "@/shared/components/Header/Logo";
import Nav from "@/shared/components/Header/Nav";
export default function HeaderFoco() {
    return(
        <div>
           <HeaderBase left={<>
               <Logo />
                <h2 className="titulo-2 ml-6">TaskFlow</h2>
            </>}
            right={
            <>
                <Nav />
                <Icons />
            </>
                
            }/>
            
        </div>
    )
}