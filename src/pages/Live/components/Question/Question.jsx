import SingleChoiceGroup from '../SingleChoiceGroup';
import { useSelector } from 'react-redux';
import { quizSelector } from '../../../../redux/selectors';

function Question({ questionIndex }) {
    const quiz = useSelector(quizSelector);
    const question = quiz.questions[questionIndex];

    return (
        <div className="mx-auto mt-5 w-full max-w-[720px]">
            <h1 className="text-2xl font-semibold text-gray-700">Câu hỏi 1</h1>
            <p className="mt-4 text-gray-700">{question.content}</p>

            {/* ANSWER */}
            <SingleChoiceGroup
                questionIndex={questionIndex}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                chosenAnswer={question.chosenAnswer}
                submited={question.submited}
            />
        </div>
    );
}

export default Question;
