import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection';

function Home() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggleHandler} />
            <Navbar toggle={toggleHandler}/>
            <HeroSection />
        </div>
    )
}

export default Home
