import React from 'react';
import './WordInput.css';

const WordInput = ({filter, setFilter}) => {

    const onClickFilter = (filterType) => {
        if(filterType === filter) return false;
        setFilter(filterType);
    }

    return (
        <div className="WordInput">
            <h2>My 단어장 📚</h2>

            <div className="filter-group">
                <button onClick={() => onClickFilter('0')} className={filter === '0' ? 'active' : ''}>전체</button>
                <button onClick={() => onClickFilter('1')} className={filter === '1' ? 'active' : ''}>미암기</button>
                <button onClick={() => onClickFilter('2')} className={filter === '2' ? 'active' : ''}>완료</button>
                <button className="btn-test">✍️ 시험 보기</button>
            </div>

            <div className="input-group">
                <input type="text" placeholder="한자" />
                <input type="text" placeholder="요미가나" />
                <input type="text" placeholder="뜻" />
                <button className="btn-add">추가</button>
            </div>
        </div>
    );
};

export default WordInput;