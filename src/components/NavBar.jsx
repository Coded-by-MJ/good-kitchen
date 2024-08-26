import { Link } from "@tanstack/react-router"

const NavBar = () => {




  return (
    <header className="bg-white w-full  shadow-lg rounded-b-xl flex justify-center py-4 px-6 items-center">
        <Link to={"/"} className="no-underline grid place-items-center"> 
             <img src="/logo.png" alt="logo" className="size-[120px] bg-cover "/>
        
        </Link>
        
    </header>
  )
}

export default NavBar