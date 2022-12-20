import { IconButton } from "@mui/material"


export default function NavIconButton({ icon, customFunction }: { icon: JSX.Element, customFunction?: () => void, customTw?: string }) {

  // return (
  //   <div className={`text-xl mx-10 h-9 w-9 flex dark:bg-light-deepblue bg-light-blue rounded-lg hover:dark:bg-primary-blue hover:bg-primary-blue hover:text-white text-primary-blue ease-in duration-150 hover:shadow-primary-blue-half hover:shadow-headbar-button ${customTw}`}>
  //       <Button className="w-full flex justify-center items-center" onClick={customFunction}>
  //           {icon}
  //       </Button>
  //   </div>
  // )
  return (
    <IconButton onClick={customFunction} sx={{ width: "48px", height: "48px", borderRadius: "12px", background: "#2196F350", '&:hover': "#2196F3", color: "#2196F3" }}>
      {icon}
    </IconButton>
  )
}

