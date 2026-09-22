import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DocumentSubmission from './components/DocumentSubmission/DocumentSubmission';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import EducationLevels from './components/ProgramPartners/EducationLevels';
import LocationMap from './components/LocationMap/LocationMap';
import Hero from "./components/Hero/Hero";
import UsefulServices from "./components/UsefulServices/UsefulServices";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="App">
            {/* Оверлей для закрытия меню */}
            <div
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            ></div>

            <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
            <div className={`main-content ${isMenuOpen ? 'menu-open' : ''}`}>
                <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
                <main className="content">
                    <Hero/>
                    <DocumentSubmission />
                    <UsefulServices/>
                    <EducationLevels />
                    <LocationMap />
                    <ContactForm />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
