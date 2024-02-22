import React from "react"
import classes from "./navbar.modules.css"




const Navbar = () => {
    return (
        <header className={classes.header}>
           <nav>
                <a className='btn btn-primary'>Electrodomesticos</a>
                <a>Tecnologia</a>
                <a>Accesorios</a>
           </nav>
           <CartWidget />
        </header>
    )
}
export default Navbar