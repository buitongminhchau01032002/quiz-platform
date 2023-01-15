import SingleChoiceGroup from '../SingleChoiceGroup';

const QUESTIONS = {
    content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    answers: [
        'piscing elit, sed do eiusmod tempor',
        'consectetur adipiiusmod tempor',
        'adipiscing elit, sed do eiusmod tempor',
        'fasdf adipiscing elit, sed do eiusmod tempor',
    ],
    correctAnswer: 0,
    hint: '',
    explanation: 'Hahaha',
    chosenAnswer: null,
};

function Question() {
    return (
        <div className="mx-auto mt-5 w-full max-w-[720px]">
            <h1 className="text-2xl font-semibold text-gray-700">Câu hỏi 1</h1>
            <p className="mt-4 text-gray-700">{QUESTIONS.content}</p>

            {/* ANSWER */}
            <SingleChoiceGroup />
        </div>
    );
}

export default Question;
