import clsx from 'clsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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
            <main className="flex h-screen pt-14">
                {/* Main quiz */}
                <div className="h-full flex-1 bg-gray-100 pb-6" style={{ overflowY: 'overlay' }}>
                    <Question questionIndex={quiz?.currentQuestion || 0} />
                </div>
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
        </div>
    );
}

export default Live;
