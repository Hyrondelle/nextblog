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
    
        <Button variant="outline" size="icon"
        className="flex justify-center"
        onClick={modifTheme}>


          <Sun className="h-6 w-6 scale-0 dark:scale-100" />
          <Moon className="h-6 w-6 scale-100 dark:scale-0" />
          
        </Button>
      
  )
}
