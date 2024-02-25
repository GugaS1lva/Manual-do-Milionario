import { Details } from "@/components/details";
import { Hero } from "@/components/hero";
import { Plans } from "@/components/plans";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-[16px] sm:px-[32px] md:px-[64px] lg:px-[128px] text-white font-poppins">
      <Hero />
      <Details />
      <Plans />
    </main>
  );
}
