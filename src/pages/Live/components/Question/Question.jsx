import { useState } from 'react';
import SingleChoiceGroup from '../SingleChoiceGroup';
import { useDispatch, useSelector } from 'react-redux';
import { quizSelector } from '../../../../redux/selectors';
import { quizActions } from '../../../../redux/slices/quizSlice';
import QUESTION_STATE from '../../../../constants/question-state';
import clsx from 'clsx';
import QUIZ_STATE from '../../../../constants/quiz-state';

function Question({ questionIndex }) {
    const quiz = useSelector(quizSelector);
    const question = quiz.questions[questionIndex];
    const dispatch = useDispatch();

    function handleSubmitQuestion() {
        dispatch(quizActions.submitQuestion(questionIndex));
    }

    function handleToggleExplanation() {
        dispatch(quizActions.toggleShowExplation(questionIndex));
    }
    function handleToggleHint() {
        dispatch(quizActions.toggleShowHint(questionIndex));
    }

    function handleNextQuestion() {
        let index = null;
        for (let i = questionIndex + 1; i < quiz.questions.length; i++) {
            if (quiz.questions[i].state === QUESTION_STATE.PENDDING) {
                index = i;
                break;
            }
        }
        if (index !== null) {
            dispatch(quizActions.gotoQuestion(index));
            return;
        }

        index = null;
        for (let i = 0; i < questionIndex; i++) {
            if (quiz.questions[i].state === QUESTION_STATE.PENDDING) {
                index = i;
                break;
            }
        }
        if (index !== null) {
            dispatch(quizActions.gotoQuestion(index));
            return;
        }
    }

    return (
        <div className="mx-auto mt-5 w-full max-w-[720px]">
            <div className="flex items-center ">
                <h1 className="text-2xl font-semibold text-gray-700">{`Câu hỏi ${questionIndex + 1}`}</h1>
                <p
                    className={clsx('mt-1 ml-3 flex ', {
                        'text-primary': question.state === QUESTION_STATE.PENDDING,
                        'text-green-500': question.state === QUESTION_STATE.CORRECT,
                        'text-red-400': question.state === QUESTION_STATE.INCORRECT,
                        'text-orange-400': question.state === QUESTION_STATE.SKIPPED,
                    })}
                >
                    {question.state === QUESTION_STATE.PENDDING && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                    {question.state === QUESTION_STATE.CORRECT && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}
                    {question.state === QUESTION_STATE.INCORRECT && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}
                    {question.state === QUESTION_STATE.SKIPPED && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                            />
                        </svg>
                    )}
                    <p className="ml-1 text-sm font-semibold">
                        {question.state === QUESTION_STATE.PENDDING && 'Chưa hoàn thành'}

                        {question.state === QUESTION_STATE.CORRECT && 'Chính xác'}
                        {question.state === QUESTION_STATE.INCORRECT && 'Chưa chính xác'}
                        {question.state === QUESTION_STATE.SKIPPED && 'Đã bỏ qua'}
                    </p>
                </p>
            </div>
            <p className="mt-4 text-gray-700">{question.content}</p>

            {/* HINT */}
            {question?.hint && (
                <button
                    className="mt-2 flex font-medium text-primary-dark hover:text-primary"
                    onClick={handleToggleHint}
                >
                    <div className="mr-2">
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
                                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                            />
                        </svg>
                    </div>

                    <p>{question?.showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}</p>
                </button>
            )}
            {question?.showHint && question?.hint && (
                <div className="mt-2">
                    <div className="font-semibold">Gợi ý:</div>
                    <div>{question?.hint}</div>
                </div>
            )}

            {/* ANSWER */}
            <SingleChoiceGroup
                questionIndex={questionIndex}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                chosenAnswer={question.chosenAnswer}
                submited={question.state !== QUESTION_STATE.PENDDING}
            />

            <div className="mt-4 flex items-center justify-between">
                <div>
                    {question?.state !== QUESTION_STATE.PENDDING && question?.explanation && (
                        <button
                            className="flex font-medium text-primary-dark hover:text-primary"
                            onClick={handleToggleExplanation}
                        >
                            <div className="mr-2">
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
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    />
                                </svg>
                            </div>

                            <p>{question?.showExplanation ? 'Ẩn giải thích' : 'Xem giải thích'}</p>
                        </button>
                    )}
                </div>
                <div>
                    {question.state === QUESTION_STATE.PENDDING && question?.chosenAnswer !== null && (
                        <button
                            className="flex h-10 items-center rounded-lg bg-primary px-6 font-medium uppercase text-white hover:bg-primary-dark"
                            onClick={handleSubmitQuestion}
                        >
                            Trả lời
                        </button>
                    )}

                    {question.state !== QUESTION_STATE.PENDDING && quiz.state === QUIZ_STATE.PENDDING && (
                        <button
                            className="flex h-10 items-center rounded-lg bg-primary px-6 font-medium uppercase text-white hover:bg-primary-dark"
                            onClick={handleNextQuestion}
                        >
                            <p>Câu hỏi tiếp theo</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* EXPLANATION */}
            {question.state !== QUESTION_STATE.PENDDING && question?.showExplanation && question?.explanation && (
                <div className="mt-2">
                    <div className="font-semibold">Giải thích:</div>
                    <div>{question?.explanation}</div>
                </div>
            )}
        </div>
    );
}

export default Question;
