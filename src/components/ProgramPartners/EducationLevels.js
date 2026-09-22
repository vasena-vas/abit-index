import React from 'react';
import './EducationLevels.css';

const EducationLevels = () => {
    const educationLevels = [
        {
            id: 1,
            title: "Колледж",
            subtitle: "Среднее профессиональное образование",
            description: "Практическая подготовка по актуальным специальностям с возможностью трудоустройства сразу после окончания.",
            stats: [
                "15+ программ",
                "300+ бюджет. мест"
            ],
            features: [
                "После 9 или 11 класса",
                "Практические навыки",
                "Быстрое трудоустройство"
            ],
            cardColor: "#F8F9F7",
            borderColor: "#DFF2CE",
            accentColor: "#8BA474",
            textColor: "#8BA474",
            buttonColor: "#8BA474"
        },
        {
            id: 2,
            title: "Бакалавриат/ Специалитет",
            subtitle: "Высшее образование",
            description: "Фундаментальная подготовка по техническим направлениям с получением диплома государственного образца.",
            stats: [
                "47+ программ",
                "1000+ бюджет. мест"
            ],
            features: [
                "Поступление по ЕГЭ",
                "Очная и заочная формы",
                "Бюджетные места"
            ],
            cardColor: "#F4F4F8",
            borderColor: "#9EA5DD",
            accentColor: "#323C8D",
            textColor: "#323C8D",
            buttonColor: "#323C8D"
        },
        {
            id: 3,
            title: "Магистратура",
            subtitle: "Углубленная подготовка",
            description: "Научно-исследовательская деятельность и углубленная специализация для выпускников бакалавриата.",
            stats: [
                "25+ программ",
                "150+ бюджет. мест"
            ],
            features: [
                "После бакалавриата",
                "Научные исследования",
                "Магистерская диссертация"
            ],
            cardColor: "#FCF3F3",
            borderColor: "#F5ADAF",
            accentColor: "#E31E24",
            textColor: "#E31E24",
            buttonColor: "#E31E24"
        },
        {
            id: 4,
            title: "Аспирантура",
            subtitle: "Подготовка кадров высшей квалификации",
            description: "Подготовка научных кадров с защитой кандидатской диссертации и получением ученой степени.",
            stats: [
                "12+ программ",
                "50+ бюджет. мест"
            ],
            features: [
                "После магистратуры",
                "Кандидатская диссертация",
                "Научная деятельность"
            ],
            cardColor: "#F5F5F5",
            borderColor: "#D8D8D8",
            accentColor: "#282A29",
            textColor: "#282A29",
            buttonColor: "#282A29"
        }
    ];

    return (
        <div className="education-wrapper">
            <div className="education-header">
                <h2 className="education-main-title">Уровни образования</h2>
                <p className="education-subtitle">
                    От среднего профессионального до высшего образования — найдите программу, которая подходит именно вам
                </p>
            </div>

            <div className="education-grid">
                {educationLevels.map((level) => (
                    <div
                        key={level.id}
                        className="education-card"
                        style={{
                            backgroundColor: level.cardColor,
                            borderColor: level.borderColor
                        }}
                    >
                        <h3
                            className="education-title"
                            style={{ color: level.textColor }}
                        >
                            {level.title}
                        </h3>
                        <h4 className="education-subtitle-card">{level.subtitle}</h4>
                        <p className="education-description">{level.description}</p>

                        <div className="education-stats">
                            {level.stats.map((stat, index) => {
                                // Разделяем строку типа "15+ программ" на число и описание
                                const parts = stat.split(' ');
                                const number = parts[0];
                                const label = parts.slice(1).join(' ');
                                return (
                                    <div key={index} className="education-stat">
                                        <span className="stat-number" style={{ color: level.accentColor }}>{number}</span>
                                        <span className="stat-label">{label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <ul className="education-features">
                            {level.features.map((feature, index) => (
                                <li key={index} style={{ color: level.textColor }}>{feature}</li>
                            ))}
                        </ul>

                        <div className="education-buttons">
                            <button
                                className="education-button education-button-primary"
                                style={{ backgroundColor: level.buttonColor }}
                            >
                                Подать документы →
                            </button>
                            <button
                                className="education-button education-button-secondary"
                                style={{ color: level.buttonColor, borderColor: level.buttonColor }}
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Блок с профориентацией и консультацией - с картинками как в UsefulServices */}
            <div className="education-help-section">
                <div className="help-card help-card-test">
                    <div className="help-card-content">
                        <h3 className="help-title">Не можешь определиться?</h3>
                        <p className="help-description">
                            Пройдите тест профориентации и получите персональные рекомендации по выбору специальности
                        </p>
                        <button className="help-button help-button-outline">
                            Специалист по профориентации →
                        </button>
                    </div>
                    <div className="help-card-image">
                        <img src="/images/program-image.png" alt="Профориентация" />
                    </div>
                </div>

                <div className="help-card help-card-consult">
                    <div className="help-card-content">
                        <h3 className="help-title">Нужна консультация?</h3>
                        <p className="help-description">
                            Получите персональную консультацию от специалистов приемной комиссии
                        </p>
                        <button className="help-button help-button-primary">
                            Получить консультацию →
                        </button>
                    </div>
                    <div className="help-card-image">
                        <img src="/images/program-image.png" alt="Консультация" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationLevels;
