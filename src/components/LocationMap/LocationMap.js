import React, { useState } from 'react';
import './LocationMap.css';

const LocationMap = () => {
    const [activeTab, setActiveTab] = useState('map');

    // Прямая ссылка на карту через iframe
    const mapSrc = "https://yandex.ru/map-widget/v1/?um=constructor%3Ae772f7d47c06a43709aa06309d074706363ff2d6695694bfb71daa32213a836d&source=constructor&scroll=true";

    return (
        <div className="location-wrapper">
            <div className="location-header">
                <h2 className="location-main-title">Как добраться до МГТУ им. Г.И. Носова</h2>
                <p className="location-subtitle">Интерактивная карта</p>
            </div>

            <div className="location-content">
                {/* Левая колонка с картой - синяя карточка */}
                <div className="location-map-column location-card-blue">
                    <div className="map-tabs">
                        <button
                            className={`map-tab ${activeTab === 'map' ? 'active' : ''}`}
                            onClick={() => setActiveTab('map')}
                        >
                            Карта
                        </button>
                        <button
                            className={`map-tab ${activeTab === 'transport' ? 'active' : ''}`}
                            onClick={() => setActiveTab('transport')}
                        >
                            Транспорт
                        </button>
                    </div>

                    <div className="map-container">
                        {activeTab === 'map' ? (
                            <div className="interactive-map">
                                <div className="map-placeholder">
                                    <iframe
                                        src={mapSrc}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Карта МГТУ им. Г.И. Носова"
                                        className="yandex-map-iframe"
                                    />
                                    <div className="map-hint">
                                        Наведите на маркеры
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="transport-info">
                                <h3 className="transport-title">Общественный транспорт</h3>
                                <div className="transport-list">
                                    <div className="transport-item">
                                        <span className="transport-icon">🚌</span>
                                        <div className="transport-details">
                                            <strong>Автобусы:</strong> № 1, 5, 12, 15, 22
                                            <span className="transport-stop">Остановка "Площадь народных гуляний"</span>
                                        </div>
                                    </div>
                                    <div className="transport-item">
                                        <span className="transport-icon">🚐</span>
                                        <div className="transport-details">
                                            <strong>Маршрутные такси:</strong> № 2, 8, 18, 25
                                            <span className="transport-stop">Остановка "МГТУ"</span>
                                        </div>
                                    </div>
                                    <div className="transport-item">
                                        <span className="transport-icon">🚋</span>
                                        <div className="transport-details">
                                            <strong>Трамваи:</strong> № 3, 7, 10
                                            <span className="transport-stop">Остановка "Университет"</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="transport-note">
                                    <p>Среднее время в пути от ж/д вокзала: 15-20 минут</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="map-objects">
                        <h4 className="objects-title">Объекты на карте</h4>
                        <div className="objects-list">
                            <div className="object-item object-main">
                                <span className="object-marker"></span>
                                <span className="object-name">Главный корпус</span>
                            </div>
                            <div className="object-item object-college">
                                <span className="object-marker"></span>
                                <span className="object-name">Колледж МГТУ</span>
                            </div>
                            <div className="object-item object-dorm">
                                <span className="object-marker"></span>
                                <span className="object-name">Общежития</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая колонка с контактной информацией - красная карточка */}
                <div className="right-info-column">
                    <div className="right-contact-card">
                        <h3 className="right-contact-title">Контактная информация</h3>
                        <div className="right-contact-details">
                            <div className="right-contact-item">
                                <span className="right-contact-icon">📍</span>
                                <span className="right-contact-text">г. Магнитогорск, пр. Ленина, 38</span>
                            </div>
                            <div className="right-contact-item">
                                <span className="right-contact-icon">📞</span>
                                <span className="right-contact-text">+7 (3519) 29-84-35</span>
                            </div>
                            <div className="right-contact-item">
                                <span className="right-contact-icon">✉️</span>
                                <span className="right-contact-text">priem@magtu.ru</span>
                            </div>
                            <div className="right-contact-item">
                                <span className="right-contact-icon">🕐</span>
                                <div className="right-contact-text">
                                    Пн-Пт: 09:00-17:00<br />
                                    СБ-ВС: 9:00-13:00
                                </div>
                            </div>
                        </div>
                        <button className="right-yandex-btn" onClick={() => window.open(mapSrc, '_blank')}>
                            Открыть в Яндекс.Картах →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationMap;
