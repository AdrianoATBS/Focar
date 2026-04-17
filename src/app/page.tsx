import HeaderBase from "@/shared/components/Header/HeaderBase";
import Logo from "@/shared/components/Header/Logo";
import Nav from "@/shared/components/Header/Nav";
import Icons from "@/shared/components/Header/Icons";
import Input from "@/shared/components/Header/Input";
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto w-full">  
      <HeaderBase 
        left={<>
          <Logo />
          <Nav />
        </>}
        right={<Icons />}
      />
    </main>
  );
}
