import clsx from 'clsx';
import { useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../../components/Modal/Modal';
import QUESTION_STATE from '../../../../constants/question-state';
import { quizSelector } from '../../../../redux/selectors';
import { quizActions } from '../../../../redux/slices/quizSlice';

function HeaderLive() {
    const quiz = useSelector(quizSelector);
    const dispatch = useDispatch();
    const [showComfirmComplete, setShowComfirmComplete] = useState(false);

    function handleNextQuestion() {
        dispatch(quizActions.nextQuestion());
    }
    function handlePrevQuestion() {
        dispatch(quizActions.prevQuestion());
    }
    function handleCompleteQuiz() {
        const penddingQuestion = quiz.questions.reduce(
            (total, currQuestion) => (currQuestion.state === QUESTION_STATE.PENDDING ? total + 1 : total),
            0
        );
        if (penddingQuestion > 0) {
            setShowComfirmComplete(true);
        } else {
            dispatch(quizActions.complete());
        }
    }

    return (
        <>
            <div className="fixed right-0 left-0 z-[10] flex h-14 items-center justify-between border-b bg-gray-100 px-8">
                <div className="flex items-center">
                    <div className="mr-3 text-lg font-medium">Ôn tập OOP C++</div>
                    <div className="text-primary">
                        <CircularProgressbarWithChildren
                            className="h-8 w-8"
                            background
                            styles={buildStyles({
                                backgroundColor: '#eee',
                                pathColor: 'currentcolor',
                                trailColor: 'transparent',
                            })}
                            value={(
                                ((quiz.correctQuestion + quiz.incorrectQuestion) * 100) /
                                quiz.numberOfQuestion
                            ).toFixed(0)}
                        >
                            <div style={{ fontSize: '10px' }} className="font-medium text-gray-700">
                                {(
                                    ((quiz.correctQuestion + quiz.incorrectQuestion) * 100) /
                                    quiz.numberOfQuestion
                                ).toFixed(0) + '%'}
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <button
                        className={clsx(
                            'ml-3 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-medium uppercase text-primary hover:border-primary'
                        )}
                        onClick={handleCompleteQuiz}
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
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <p className="ml-1">Kết thúc</p>
                    </button>
                </div>
                <div className="flex space-x-3">
                    <button
                        className={clsx(
                            'flex h-9 items-center rounded-lg border border-primary px-4 text-sm font-medium uppercase text-primary hover:bg-primary/5',
                            {
                                'pointer-events-none opacity-50': quiz.currentQuestion === 0,
                            }
                        )}
                        onClick={handlePrevQuestion}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <p className="ml-1">Câu hỏi trước</p>
                    </button>
                    <button
                        className={clsx(
                            'flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium uppercase text-white hover:bg-primary-dark',
                            {
                                'pointer-events-none opacity-50': quiz.currentQuestion === quiz.questions.length - 1,
                            }
                        )}
                        onClick={handleNextQuestion}
                    >
                        <p className="mr-1">Câu hỏi sau</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <Modal
                warning
                title="Xác nhận kết thúc!"
                description="Bạn chưa hoàn thành hết tất cả câu hỏi. Bạn có muốn kết thúc không?"
                okButtonText="Kết thúc"
                cancelButtonText="Huỷ"
                open={showComfirmComplete}
                setOpen={setShowComfirmComplete}
                onOkButtonClick={() => dispatch(quizActions.complete())}
            />
        </>
    );
}

export default HeaderLive;
