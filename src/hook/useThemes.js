import { useState } from "react";


export function useThemes () {
  const [moon , setMoon ] = useState(false)
  
  const moonTheme = () => {
    setMoon(!moon)
  }


  return {moon, moonTheme}
}