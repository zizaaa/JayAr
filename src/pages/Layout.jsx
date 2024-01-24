import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import { useEffect, useState } from "react";

const Layout = () => {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    const gradientStyle = {
        background: `radial-gradient(500px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    };

    return (
        <div className="flex lg:flex-row flex-col h-full items-center justify-between lg:gap-0 gap-10 relative">
            <div 
                className='absolute top-0 left-0 bottom-0 right-0 z-0 pointer-events-none lg:block hidden' 
                style={gradientStyle}
            >
            </div>
            <div className="lg:w-[35rem] w-full lg:h-full h-auto pt-20 lg:pb-20 pb-0 lg:ps-20 px-10 lg:pe-0 pe-10 overflow-hidden">
                <Nav/>
            </div>
            <div className="lg:py-20 py-0 pe-10 lg:ps-0 h-full ps-10 flex-1 flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout