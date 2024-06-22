import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-3xl">
      <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
      <Hero />
    </main>
  );
}
