import { useDispatch } from 'react-redux';
import { quizActions } from '../../../../redux/slices/quizSlice';
import SingleChoice from './SingleChoice';

function SingleChoiceGroup({ answers, correctAnswer, chosenAnswer, questionIndex, submited }) {
    const dispatch = useDispatch();

    function handleChoose(answer) {
        dispatch(
            quizActions.chooseAnswer({
                questionIndex,
                chosenAnswer: answer,
            })
        );
    }

    return (
        <div className="mt-10 space-y-3">
            {answers?.map((answer, index) => (
                <SingleChoice
                    key={index}
                    chosen={chosenAnswer === index}
                    incorrect={submited && chosenAnswer === index && chosenAnswer !== correctAnswer}
                    answer={submited && correctAnswer === index}
                    disabled={submited}
                    onClick={() => handleChoose(index)}
                >
                    {answer}
                </SingleChoice>
            ))}
        </div>
    );
}

export default SingleChoiceGroup;
