import { useState } from 'react';
import SingleChoiceGroup from '../SingleChoiceGroup';
import { useDispatch, useSelector } from 'react-redux';
import { quizSelector } from '../../../../redux/selectors';
import { quizActions } from '../../../../redux/slices/quizSlice';

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

            <div className="mt-4 flex items-center justify-between">
                <div>
                    {question?.submited && question?.explanation && (
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
                    {!question?.submited && (
                        <button
                            className="flex h-10 items-center rounded-lg bg-primary px-6 font-medium uppercase text-white hover:bg-primary-dark"
                            onClick={handleSubmitQuestion}
                        >
                            Trả lời
                        </button>
                    )}

                    {question?.submited && (
                        <button className="flex h-10 items-center rounded-lg bg-primary px-6 font-medium uppercase text-white hover:bg-primary-dark">
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
            {question?.submited && question?.showExplanation && question?.explanation && (
                <div className="mt-2">
                    <div className="font-semibold">Giải thích:</div>
                    <div>{question?.explanation}</div>
                </div>
            )}
        </div>
    );
}

export default Question;
