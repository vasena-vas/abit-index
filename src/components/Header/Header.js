import React, { useState } from 'react';
import './Header.css';

const Header = ({ onMenuToggle, isMenuOpen }) => {
    return (
        <header className="header">
            {/* Десктопный заголовок */}
            <div className="header-top">
                <div className="header-content">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Поиск по сайту"
                            className="search-input"
                        />
                    </div>
                    <div className="header-contact">
                        <div className="hotline">
                            <span className="hotline-label">Горячая линия:</span>
                            <span className="hotline-number">8 (800) 100-19-34</span>
                        </div>
                        <div className="email">
                            <span className="email-label">e-mail:</span>
                            <span className="email-address">tutmailabit@magtu.ru</span>
                        </div>
                    </div>
                    <button className="application-btn">
                        <span>Подать заявление</span>
                        <img src="/images/header/img.png" alt="→" className="btn-icon" />
                    </button>
                    <button className="pre-registration-btn">
                        <img src="/images/header/img_1.png" alt="📅" className="pre-btn-icon" />
                        <div className="pre-registration-text">
                            <span className="pre-registration-line1">предварительная запись</span>
                            <strong className="pre-registration-line2">на личный прием</strong>
                        </div>
                    </button>
                </div>
            </div>

            {/* Мобильный заголовок */}
            <div className="header-mobile">
                <div className="mobile-header-content">
                    <img
                        src="/images/logo-mini.png"
                        alt="МГТУ им. Г.И. Носова"
                        className="mobile-logo"
                    />
                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={onMenuToggle}
                        aria-label="Меню"
                    >
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
