"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {
  const router =useRouter()
  return (
    <div className="flex flex-col items-center justify-items-center gap-2 ">
      <h1>home</h1>
      <Button size="lg" variant="outline" 
      onClick={()=>router.push("/login")}>
        
        click me
      </Button>
    </div>
  );
}
