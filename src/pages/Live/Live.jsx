import clsx from 'clsx';
import { useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import QUIZ_STATE from '../../constants/quiz-state';
import { quizSelector } from '../../redux/selectors';
import HeaderLive from './components/HeaderLive';
import Question from './components/Question';
import Sidebar from './components/Sidebar';

function Live() {
    const quiz = useSelector(quizSelector);
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <div className="w-full overflow-x-hidden">
            <HeaderLive />
            {quiz.state !== QUIZ_STATE.RESULT ? (
                <main className="flex h-screen pt-14">
                    {/* Main quiz */}
                    <div className="h-full flex-1 bg-gray-100 pb-6" style={{ overflowY: 'overlay' }}>
                        <Question questionIndex={quiz?.currentQuestion || 0} />
                    </div>

                    {/* SIZEBAR */}
                    <div
                        className={clsx('relative transition-all duration-300', {
                            'w-0': !showSidebar,
                            'w-[352px]': showSidebar,
                        })}
                    >
                        <button
                            className={clsx(
                                'absolute -left-9 flex h-14 w-9 items-center justify-center rounded-l-lg border-l border-t border-b border-primary bg-white text-gray-700 hover:text-primary',
                                {
                                    '!border-none': showSidebar,
                                }
                            )}
                            onClick={() => setShowSidebar(!showSidebar)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={clsx('h-6 w-6', {
                                    'rotate-180': showSidebar,
                                })}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <Sidebar />
                    </div>
                </main>
            ) : (
                <main className="flex min-h-screen flex-col items-center bg-gray-100 pt-14">
                    <h2 className="mt-8 text-2xl font-bold text-gray-700">TỔNG KẾT</h2>
                    <div className="mt-16 grid grid-cols-4 gap-5">
                        <div className="relative flex h-[200px] w-[200px] flex-col items-center justify-center rounded-xl bg-white pt-5 text-green-500">
                            <div className="absolute top-0 -translate-y-1/2 ">
                                <CircularProgressbarWithChildren
                                    className="h-20"
                                    background
                                    styles={buildStyles({
                                        backgroundColor: '#fff',
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
                            </div>
                            <div className="font-semibold uppercase text-gray-600">số câu đúng</div>
                            <div className="text-7xl font-bold">{quiz.correctQuestion}</div>
                        </div>
                        <div className="relative flex h-[200px] w-[200px] flex-col items-center justify-center rounded-xl bg-white pt-5 text-red-400 ">
                            <div className="absolute top-0 -translate-y-1/2 ">
                                <CircularProgressbarWithChildren
                                    className="h-20"
                                    background
                                    styles={buildStyles({
                                        backgroundColor: '#fff',
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
                            </div>
                            <div className="font-semibold uppercase text-gray-600">số câu sai</div>
                            <div className="text-7xl font-bold">{quiz.incorrectQuestion}</div>
                        </div>
                        <div className="relative flex h-[200px] w-[200px] flex-col items-center justify-center rounded-xl bg-white pt-5 text-orange-400">
                            <div className="absolute top-0 -translate-y-1/2 ">
                                <CircularProgressbarWithChildren
                                    className="h-20"
                                    background
                                    styles={buildStyles({
                                        backgroundColor: '#fff',
                                        pathColor: 'currentcolor',
                                        trailColor: '#eee',
                                    })}
                                    strokeWidth={5}
                                    value={((quiz.skippedQuestion * 100) / quiz.numberOfQuestion).toFixed(0)}
                                >
                                    <div className="text-lg">
                                        {((quiz.skippedQuestion * 100) / quiz.numberOfQuestion).toFixed(0) + '%'}
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className="font-semibold uppercase text-gray-600">số câu bỏ qua</div>
                            <div className="text-7xl font-bold">{quiz.skippedQuestion}</div>
                        </div>
                        <div className="relative flex h-[200px] w-[200px] flex-col items-center justify-center rounded-xl bg-white pt-5 text-primary">
                            <div className="absolute top-0 -translate-y-1/2 ">
                                <CircularProgressbarWithChildren
                                    className="h-20"
                                    background
                                    styles={buildStyles({
                                        backgroundColor: '#fff',
                                        pathColor: 'currentcolor',
                                        trailColor: '#eee',
                                    })}
                                    strokeWidth={5}
                                    value={100}
                                >
                                    <div className="text-lg">{100 + '%'}</div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className="font-semibold uppercase text-gray-600">tổng số câu</div>
                            <div className="text-7xl font-bold">{quiz.numberOfQuestion}</div>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}

export default Live;
