import React from "react"
import { motion } from "framer-motion"

export const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
            }}
            className="header"
        >
            <div className="header-inner">
                <div className="logo">AS</div>
                <nav className="nav">
                    {/*<li>
                        <a href="/design">Design</a>
                    </li>
                    <li>
                        <a href="/strategy">Build</a>
                    </li>
                    <li>
                        <a href="/cases">Cases</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/why">Why work with us?</a>
                    </li>*/}
                </nav>
                <div className="contact">
                    <a href="mailto:inquiries@anotherstory.com?subject=Referral%20from%20anotherstory">
                        inquiries@anotherstory.com
                    </a>
                </div>
                {/*<div className="hamburger-menu">
                    <span></span>
                    <span></span>
                </div>*/}
            </div>
        </motion.div>
    )
}

//export default Header
