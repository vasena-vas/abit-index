import React from 'react';
import './UsefulServices.css';

const UsefulServices = () => {
    return (
        <section className="useful-services-section">
            <div className="services-container">
                <div className="services-header">
                    <h1 className="services-main-title">Полезные сервисы</h1>
                    <p className="services-subtitle">
                        Все необходимые инструменты для поступления в одном месте — быстро, удобно, современно.
                    </p>
                </div>

                <div className="services-grid">
                    {/* 1 строка: большая синяя карточка (Калькулятор ЕГЭ) + красная + зеленая */}
                    <div className="service-card service-card-large service-card-blue">
                        <div className="service-card-content">
                            <h3 className="service-title">Калькулятор ЕГЭ</h3>
                            <button className="service-button service-button-blue-outline">
                                Расчитать направления →
                            </button>
                        </div>
                        <div className="service-card-image">
                            <img src="/images/program-image.png" alt="Калькулятор ЕГЭ" />
                        </div>
                    </div>

                    <div className="service-card service-card-red">
                        <h3 className="service-title">Сроки приёма</h3>
                        <p className="service-description">
                            Все важные даты приёма здесь
                        </p>
                        <button className="service-button service-button-outline-red">
                            Открыть чеклист
                        </button>
                    </div>

                    <div className="service-card service-card-green">
                        <h3 className="service-title">Иностранцам</h3>
                        <p className="service-description">
                            Тел.:+7 (3519) 23-99-92
                            Почта: inter@magtu.ru
                        </p>
                        <button className="service-button service-button-green">
                            Перейти на сайт →
                        </button>
                    </div>

                    {/* 2 строка: красная + зеленая + большая синяя карточка (Подготовка к поступлению) */}
                    <div className="service-card service-card-red">
                        <h3 className="service-title">Консультация</h3>
                        <p className="service-description">
                            Задайте вопрос эксперту онлайн
                        </p>
                        <button className="service-button service-button-red">
                            →
                        </button>
                    </div>

                    <div className="service-card service-card-green">
                        <h3 className="service-title">Памятка абитуриенту</h3>
                        <p className="service-description">
                            Скачайте памятку абитуриентов (по разным направлениям подготовки)
                        </p>
                        <button className="service-button service-button-green">
                            Скачать документы →
                        </button>
                    </div>

                    <div className="service-card service-card-large service-card-blue">
                        <div className="service-card-content">
                            <h3 className="service-title">Подготовка к поступлению</h3>
                            <p className="service-description">
                                Наши специалисты помогут вам с подготовкой к поступлению
                            </p>
                            <button className="service-button service-button-blue-outline">
                                Обратиться к специалистам →
                            </button>
                        </div>
                        <div className="service-card-image">
                            <img src="/images/program-image.png" alt="Подготовка к поступлению" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsefulServices;
