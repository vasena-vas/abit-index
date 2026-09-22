import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Слайды - все с красным цветом
    const slides = [
        {
            id: 1,
            title: "МГТУ им. Г.И. Носова в твоём приоритете",
            description: "Выберите программу обучения в одном из ведущих технических университетов России. Качественное образование, современная база, перспективные специальности.",
            buttonText: "Выбрать направление →"
        },
        {
            id: 2,
            title: "Современные лаборатории и оборудование",
            description: "Доступ к передовым технологиям и оборудованию для практического обучения. Подготовка к реальным производственным задачам.",
            buttonText: "Посмотреть лаборатории →"
        },
        {
            id: 3,
            title: "Стажировки в ведущих компаниях",
            description: "Партнерские программы с предприятиями-лидерами отрасли. Гарантированные стажировки и трудоустройство для лучших студентов.",
            buttonText: "Узнать о партнерах →"
        },
        {
            id: 4,
            title: "Международные программы обмена",
            description: "Возможность обучения за рубежом в университетах-партнерах. Участие в международных проектах и конференциях.",
            buttonText: "Международные программы →"
        },
        {
            id: 5,
            title: "Инновационные образовательные программы",
            description: "Программы, разработанные совместно с индустриальными партнерами. Акцент на практические навыки и компетенции будущего.",
            buttonText: "Изучить программы →"
        },
        {
            id: 6,
            title: "Научно-исследовательская деятельность",
            description: "Участие в реальных научных проектах с первого курса. Гранты и финансирование для перспективных исследований.",
            buttonText: "Научные проекты →"
        },
        {
            id: 7,
            title: "Спортивная и творческая жизнь",
            description: "Современные спортивные комплексы, творческие студии и клубы по интересам. Всестороннее развитие личности студента.",
            buttonText: "Внеучебная деятельность →"
        }
    ];

    const features = [
        {
            number: "90+",
            title: "лет опыта",
            subtitle: "проверенное качество",
            color: "#E31E24"
        },
        {
            number: "15 000+",
            title: "студентов",
            subtitle: "один из крупнейших в регионе",
            color: "#8BA474"
        },
        {
            number: "99+",
            title: "программ",
            subtitle: "различного направления",
            color: "#323C8D"
        }
    ];

    // Автопрокрутка слайдов
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <section className="hero-section">
            <div className="container">
                {/* Верхний блок - слайдер и преимущества */}
                <div className="hero-top-grid">
                    {/* Левая часть: Слайдер */}
                    <div className="slider-container">
                        <div
                            className="slider-card"
                            style={{
                                backgroundColor: "#FCF3F3",
                                borderColor: "#E31E2420"
                            }}
                        >
                            <div className="slider-content">
                                <h1
                                    className="slider-title"
                                    style={{ color: "#E31E24" }}
                                >
                                    {slides[activeSlide].title}
                                </h1>
                                <p className="slider-description">
                                    {slides[activeSlide].description}
                                </p>
                                <button
                                    className="slider-button"
                                    style={{
                                        backgroundColor: "#E31E24"
                                    }}
                                >
                                    {slides[activeSlide].buttonText}
                                </button>
                            </div>

                            {/* Индикаторы слайдов в правом нижнем углу */}
                            <div className="slider-indicators">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`slider-indicator ${activeSlide === index ? 'active' : ''}`}
                                        onClick={() => setActiveSlide(index)}
                                        aria-label={`Перейти к слайду ${index + 1}`}
                                        style={{
                                            borderColor: "#E31E24",
                                            backgroundColor: activeSlide === index ? "#E31E24" : 'transparent'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Блоки преимуществ под слайдером */}
                        <div className="features-container">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <div
                                        className="feature-number"
                                        style={{ color: feature.color }}
                                    >
                                        {feature.number}
                                    </div>
                                    <div className="feature-content">
                                        <div
                                            className="feature-title"
                                            style={{ color: feature.color }}
                                        >
                                            {feature.title}
                                        </div>
                                        <div className="feature-subtitle">
                                            {feature.subtitle}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Правая часть: Контактная информация */}
                    <div className="contact-card">
                        <div className="contact-content">
                            <h3 className="contact-title" style={{ color: "#666666" }}>
                                Адрес:
                            </h3>
                            <p className="contact-address" style={{ color: "#8BA474" }}>
                                744000, г. Магнитогорск, пр. Ленина, д. 38
                            </p>

                            {/* Линия после адреса */}
                            <div className="contact-divider"></div>

                            <div className="working-hours">
                                <p className="hours-title" style={{ color: "#666666" }}>
                                    Время работы:
                                </p>
                                <p className="hours-item" style={{ color: "#8BA474" }}>
                                    ПН-ПТ: 9:00–17:00
                                </p>
                                <p className="hours-item" style={{ color: "#8BA474" }}>
                                    СБ-ВС: 9:00–16:00
                                </p>
                            </div>

                            {/* Линия после времени работы */}
                            <div className="contact-divider"></div>

                            {/* Кнопка "Связаться с менеджером" над текстом */}
                            <div className="contact-buttons">
                                <button
                                    className="contact-button"
                                    style={{ backgroundColor: "#8BA474" }}
                                >
                                    Связаться с менеджером →
                                </button>
                            </div>

                            {/* Текст про персонального менеджера */}
                            <p className="manager-text">
                                Ваш персональный менеджер ответит на все вопросы и сопроводит на этом нелегком пути поступления
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
