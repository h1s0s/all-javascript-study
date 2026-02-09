import React from 'react';
// import { useState } from 'react';
import './WordList.css';
import WordCard from './WordCard';

const WordList = ({words}) => {

    return (
        <div className="wordList">
            {/* 단어 카드 예시 */}
            {words.map((word) => {
                return <WordCard {...word}/>
            })}
        </div>
    );
};

export default WordList;