import { useState } from 'react'
import NavIsOpen from './NavIsOpen'
import '../styles/Nav.scss'

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    const navOpener = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav>
                <input type="checkbox"  id="menu_checkbox" />
                <label onClick={navOpener} htmlFor="menu_checkbox" title="Navigation">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
            </nav>
            {isOpen && <NavIsOpen setIsOpen={setIsOpen} />}
        </>
    )
}