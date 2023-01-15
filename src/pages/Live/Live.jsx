import HeaderLive from './components/HeaderLive';
import Question from './components/Question';

function Live() {
    return (
        <div className="w-full overflow-x-hidden">
            <HeaderLive />
            <main className="flex h-screen pt-14">
                {/* Main quiz */}
                <div className="h-full flex-1 bg-gray-100">
                    <Question questionIndex={0} />
                </div>
            </main>
        </div>
    );
}

export default Live;
