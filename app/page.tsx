"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {
  const router =useRouter()
  return (
    <div className="flex min-h-100 flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>home</h1>
      <Button size="lg" variant="outline" 
      onClick={()=>router.push("/login")}>
        
        click me
      </Button>
    </div>
  );
}
