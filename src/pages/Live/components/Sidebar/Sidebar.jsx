import clsx from 'clsx';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { quizSelector } from '../../../../redux/selectors';
import { quizActions } from '../../../../redux/slices/quizSlice';

function Sidebar() {
    const quiz = useSelector(quizSelector);
    const questions = quiz.questions;
    const dispatch = useDispatch();

    function handleGotoQuestion(index) {
        dispatch(quizActions.gotoQuestion(index));
    }

    return (
        <div className="flex h-full w-[352px] flex-col bg-white">
            {/* LIST */}
            <div className="flex flex-1 justify-center overflow-y-auto px-4 pb-4 pt-6">
                <div className="grid h-fit grid-cols-5 gap-3">
                    {questions.map((question, index) => (
                        <button
                            key={index}
                            className={clsx(
                                'flex h-11 w-11 items-center justify-center rounded-lg border bg-gray-50 font-semibold text-gray-700 ring-offset-1 hover:ring-2 hover:ring-primary',
                                {
                                    'border-none !bg-red-400 !text-white':
                                        question.submited && question.chosenAnswer !== question.correctAnswer,
                                    'border-none !bg-green-400 !text-white':
                                        question.submited && question.chosenAnswer === question.correctAnswer,
                                    'ring-2 ring-primary': index === quiz.currentQuestion,
                                }
                            )}
                            onClick={() => handleGotoQuestion(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* STATISTIC */}
            <div className="flex items-center justify-around px-4 pt-2 pb-4">
                <div className="flex flex-col items-center text-green-600">
                    <CircularProgressbarWithChildren
                        className="h-20"
                        styles={buildStyles({
                            pathColor: 'currentcolor',
                            trailColor: '#eee',
                        })}
                        strokeWidth={5}
                        value={((quiz.correctQuestion * 100) / quiz.numberOfQuestion).toFixed(0)}
                    >
                        <div className="text-lg">
                            {((quiz.correctQuestion * 100) / quiz.numberOfQuestion).toFixed(0) + '%'}
                        </div>
                    </CircularProgressbarWithChildren>
                    <p>{quiz.correctQuestion + '/' + quiz.numberOfQuestion}</p>
                </div>
                <div className="flex flex-col items-center text-red-500">
                    <CircularProgressbarWithChildren
                        className="h-20"
                        styles={buildStyles({
                            pathColor: 'currentcolor',
                            trailColor: '#eee',
                        })}
                        strokeWidth={5}
                        value={((quiz.incorrectQuestion * 100) / quiz.numberOfQuestion).toFixed(0)}
                    >
                        <div className="text-lg">
                            {((quiz.incorrectQuestion * 100) / quiz.numberOfQuestion).toFixed(0) + '%'}
                        </div>
                    </CircularProgressbarWithChildren>
                    <p>{quiz.incorrectQuestion + '/' + quiz.numberOfQuestion}</p>
                </div>
                <div className="flex flex-col items-center text-primary">
                    <CircularProgressbarWithChildren
                        className="h-20"
                        styles={buildStyles({
                            pathColor: 'currentcolor',
                            trailColor: '#eee',
                        })}
                        strokeWidth={5}
                        value={(
                            ((quiz.correctQuestion + quiz.incorrectQuestion) * 100) /
                            quiz.numberOfQuestion
                        ).toFixed(0)}
                    >
                        <div className="text-lg">
                            {(((quiz.correctQuestion + quiz.incorrectQuestion) * 100) / quiz.numberOfQuestion).toFixed(
                                0
                            ) + '%'}
                        </div>
                    </CircularProgressbarWithChildren>
                    <p>{quiz.correctQuestion + quiz.incorrectQuestion + '/' + quiz.numberOfQuestion}</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
