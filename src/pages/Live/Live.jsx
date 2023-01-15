import { useSelector } from 'react-redux';
import { quizSelector } from '../../redux/selectors';
import HeaderLive from './components/HeaderLive';
import Question from './components/Question';
import Sidebar from './components/Sidebar';

function Live() {
    const quiz = useSelector(quizSelector);
    return (
        <div className="w-full overflow-x-hidden">
            <HeaderLive />
            <main className="flex h-screen pt-14">
                {/* Main quiz */}
                <div className="h-full flex-1 overflow-y-auto bg-gray-100 pb-6">
                    <Question questionIndex={quiz?.currentQuestion || 0} />
                </div>
                <Sidebar />
            </main>
        </div>
    );
}

export default Live;
