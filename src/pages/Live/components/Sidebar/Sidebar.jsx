import clsx from 'clsx';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { quizSelector } from '../../../../redux/selectors';
import { quizActions } from '../../../../redux/slices/quizSlice';
import QUESTION_STATE from '../../../../constants/question-state';
import QUIZ_STATE from '../../../../constants/quiz-state';

function Sidebar() {
    const quiz = useSelector(quizSelector);
    const questions = quiz.questions;
    const dispatch = useDispatch();

    function handleGotoQuestion(index) {
        dispatch(quizActions.gotoQuestion(index));
    }
    function handleToggleResultAndReview() {
        dispatch(quizActions.toggleResultAndReview());
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
                                    'border-none !bg-red-400 !text-white': question.state === QUESTION_STATE.INCORRECT,
                                    'border-none !bg-green-400 !text-white': question.state === QUESTION_STATE.CORRECT,
                                    'border-none !bg-orange-300 !text-white': question.state === QUESTION_STATE.SKIPPED,
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
            {quiz.state === QUIZ_STATE.PENDDING ? (
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
                                {(
                                    ((quiz.correctQuestion + quiz.incorrectQuestion) * 100) /
                                    quiz.numberOfQuestion
                                ).toFixed(0) + '%'}
                            </div>
                        </CircularProgressbarWithChildren>
                        <p>{quiz.correctQuestion + quiz.incorrectQuestion + '/' + quiz.numberOfQuestion}</p>
                    </div>
                </div>
            ) : (
                <div className="px-4 pt-2 pb-4">
                    <button
                        className={clsx(
                            'flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium uppercase text-white hover:bg-primary-dark'
                        )}
                        onClick={handleToggleResultAndReview}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                            />
                        </svg>

                        <p className="ml-1">Xem tổng kết</p>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
