import React from 'react';
import './WordList.css';

const WordCard = ({id, isDone, hieroglyph, yomigana, meaning}) => {

    return (
        <div className="word-card">
            <div className="word-info">
                <ruby>
                    {hieroglyph} <rt>{yomigana}</rt>
                </ruby>
                <span className="meaning">{meaning}</span>
            </div>

            <div className="action-buttons">
                {/* 음성듣기 SVG */}
                <button className="icon-btn" title="발음 듣기">
                    <svg className="icon-speaker" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>

                {/* 실제 체크박스 */}
                <input type="checkbox" className="check-box" title="암기 완료" />

                {/* 휴지통 SVG */}
                <button className="icon-btn" title="삭제">
                    <svg className="icon-trash" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default WordCard;