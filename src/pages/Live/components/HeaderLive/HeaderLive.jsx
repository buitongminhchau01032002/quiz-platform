import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { quizSelector } from '../../../../redux/selectors';
import { quizActions } from '../../../../redux/slices/quizSlice';

function HeaderLive() {
    const quiz = useSelector(quizSelector);
    const dispatch = useDispatch();

    function handleNextQuestion() {
        dispatch(quizActions.nextQuestion());
    }
    function handlePrevQuestion() {
        dispatch(quizActions.prevQuestion());
    }

    return (
        <div className="fixed right-0 left-0 z-[10] flex h-14 items-center justify-between border-b bg-gray-100 px-8">
            <div className="flex items-center">
                <div className="mr-3 text-lg font-medium text-primary">Ôn tập OOP C++</div>
                <CircularProgressbarWithChildren
                    className="h-8 w-8"
                    background
                    styles={buildStyles({
                        backgroundColor: '#eee',
                        pathColor: '#currentcolor',
                        trailColor: 'transparent',
                    })}
                    value={(((quiz.correctQuestion + quiz.incorrectQuestion) * 100) / quiz.numberOfQuestion).toFixed(0)}
                >
                    <div style={{ fontSize: '10px' }} className="font-medium text-gray-700">
                        {(((quiz.correctQuestion + quiz.incorrectQuestion) * 100) / quiz.numberOfQuestion).toFixed(0) +
                            '%'}
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <div className="flex space-x-3">
                <button
                    className="flex h-9 items-center rounded-lg border border-primary px-4 text-sm font-medium uppercase text-primary hover:bg-primary/5"
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
                    className="flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium uppercase text-white hover:bg-primary-dark"
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
    );
}

export default HeaderLive;
