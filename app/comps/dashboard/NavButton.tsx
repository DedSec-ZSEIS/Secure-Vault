export default function NavButton({ icon, customFunction, customTw }: { icon: JSX.Element, customFunction?: () => void, customTw?: string }) {
    

  return (
    <div className={`text-xl mr-10 ml-10 h-9 w-9 flex dark:bg-light-deepblue bg-light-blue rounded-lg hover:dark:bg-primary-blue hover:bg-primary-blue hover:text-white text-primary-blue ease-in duration-150 hover:shadow-primary-blue-half hover:shadow-headbar-button ${customTw}`}>
        <button className="w-full flex justify-center items-center" onClick={customFunction}>
            {icon}
        </button>
    </div>
  )
}
