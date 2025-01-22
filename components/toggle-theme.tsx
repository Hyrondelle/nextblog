"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ToggleTheme() {
    const [themeMode,setThemeMode] = React.useState('')
  const { setTheme } = useTheme()

  const modifTheme = ()=>{
    if(themeMode=='light'){
        setThemeMode('dark')
        
    }
    else{
        setThemeMode('light')

    }
    setTheme(themeMode)
  }

  return (
    
        <Button variant="ghost" size="icon"
        className="flex justify-center gap-0"
        onClick={modifTheme}>
          <div className="size-full flex items-center justify-center ">
          <Sun className="translate-x-2 -translate-y-0.5 scale-100 dark:scale-0" />
          <Moon className="-translate-x-2 -translate-y-0.5 scale-0 dark:scale-100" />
          </div>
        </Button>
      
  )
}
