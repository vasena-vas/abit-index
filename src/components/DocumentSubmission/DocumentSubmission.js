import React from 'react';
import './DocumentSubmission.css';

const DocumentSubmission = () => {
    const submissionMethods = [
        {
            id: 1,
            title: "Через Госуслуги",
            description: "Подача документов онлайн за 5 минут",
            buttonText: "Подать документы →",
            color: "#E31E24" // красный
        },
        {
            id: 2,
            title: "Личный приём",
            description: "Запись на консультацию в приемной комиссии",
            buttonText: "Записаться на приём →",
            color: "#8BA474" // зеленый
        },
        {
            id: 3,
            title: "Почтой",
            description: "Отправить заявление почтой",
            buttonText: "Подробнее о способе подачи →",
            color: "#323C8D" // синий
        }
    ];

    return (
        <div className="submission-container">
            <div className="submission-header">
                <h2 className="submission-main-title">Способы подачи документов</h2>
                <p className="submission-subtitle">
                    Выберите удобный для вас способ подачи документов в приемную комиссию
                </p>
            </div>

            <div className="submission-grid">
                {submissionMethods.map((method) => (
                    <div
                        key={method.id}
                        className="submission-card"
                        style={{ borderColor: method.color }}
                    >
                        <h3
                            className="submission-title"
                            style={{ color: method.color }}
                        >
                            {method.title}
                        </h3>
                        <p className="submission-description">
                            {method.description}
                        </p>
                        <button
                            className="submission-button"
                            style={{
                                backgroundColor: method.color,
                                borderColor: method.color
                            }}
                        >
                            {method.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentSubmission;
