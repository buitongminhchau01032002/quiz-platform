import clsx from 'clsx';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import { quizSelector } from '../../../../redux/selectors';

function Sidebar() {
    const quiz = useSelector(quizSelector);
    const questions = quiz.questions;

    return (
        <div className="h-full w-[352px] bg-white p-4">
            <div className="flex justify-center">
                <div className="grid grid-cols-5 gap-3">
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
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-8 flex items-center justify-around">
                <div className="flex flex-col items-center text-green-600">
                    <CircularProgressbarWithChildren
                        className="h-20"
                        styles={buildStyles({
                            // This is in units relative to the 100x100px
                            // SVG viewbox.

                            pathColor: 'currentcolor',
                            textSize: '30px',
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
                            // This is in units relative to the 100x100px
                            // SVG viewbox.

                            pathColor: 'currentcolor',
                            textSize: '30px',
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
                            // This is in units relative to the 100x100px
                            // SVG viewbox.

                            pathColor: 'currentcolor',
                            textSize: '30px',
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
