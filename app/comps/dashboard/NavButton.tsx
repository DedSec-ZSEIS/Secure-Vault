import { IconButton, Tooltip } from "@mui/material"


export default function NavIconButton({ icon, customFunction, name }: { icon: JSX.Element, customFunction?: () => void, name: string}) {

  // return (
  //   <div className={`text-xl mx-10 h-9 w-9 flex dark:bg-light-deepblue bg-light-blue rounded-lg hover:dark:bg-primary-blue hover:bg-primary-blue hover:text-white text-primary-blue ease-in duration-150 hover:shadow-primary-blue-half hover:shadow-headbar-button ${customTw}`}>
  //       <Button className="w-full flex justify-center items-center" onClick={customFunction}>
  //           {icon}
  //       </Button>
  //   </div> background: "#2196F350"
  // )
  return (
    <Tooltip title={name}>
      <IconButton onClick={customFunction} sx={{ width: "48px", height: "48px", borderRadius: "12px", '&:hover': "#2196F3", color: "#2196F3" }}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

