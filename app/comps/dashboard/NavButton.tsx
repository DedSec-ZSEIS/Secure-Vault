import { Button, IconButton } from "@mui/material"


export default function NavButton({ icon, customFunction }: { icon: JSX.Element, customFunction?: () => void, customTw?: string }) {

  // return (
  //   <div className={`text-xl mx-10 h-9 w-9 flex dark:bg-light-deepblue bg-light-blue rounded-lg hover:dark:bg-primary-blue hover:bg-primary-blue hover:text-white text-primary-blue ease-in duration-150 hover:shadow-primary-blue-half hover:shadow-headbar-button ${customTw}`}>
  //       <Button className="w-full flex justify-center items-center" onClick={customFunction}>
  //           {icon}
  //       </Button>
  //   </div>
  // )
  return (
    <IconButton onClick={customFunction} size="medium" sx={{ width: "48px", height: "48px" }}>
      {icon}
    </IconButton>
  )
}

