import { useState } from 'react';
import SingleChoice from './SingleChoice';

function SingleChoiceGroup({ answers, correctAnswer, completed = false, choosenAnswer = null }) {
    const [chosenAnswer, setChosenAnswer] = useState(null);

    function handleChoose() {}

    return (
        <div className="mt-10 space-y-3">
            {answers?.map((answer, index) => (
                <SingleChoice key={index} chosen={chosenAnswer === index} onClick={() => setChosenAnswer(index)}>
                    {answer}
                </SingleChoice>
            ))}
        </div>
    );
}

export default SingleChoiceGroup;
