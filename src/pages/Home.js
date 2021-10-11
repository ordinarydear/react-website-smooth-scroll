import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection.js/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection.js/Data';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

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
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
            
            
        </div>
    )
}

export default Home
