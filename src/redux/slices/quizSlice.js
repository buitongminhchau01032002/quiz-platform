import { createSlice } from '@reduxjs/toolkit';
import QUESTION_STATE from '../../constants/question-state';

const initialState = {
    currentQuestion: 0,
    numberOfQuestion: 12,
    correctQuestion: 0,
    incorrectQuestion: 0,
    questions: [
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'piscing elit, sed do eiusmod tempor',
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 0,
            hint: 'em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: '',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: 'Hahhaha ahha a ahhdfa sdf hasdf as dfasd fasdfhahs fasd',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'piscing elit, sed do eiusmod tempor',
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 0,
            hint: 'em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: '',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: '',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
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
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: '',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: '',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
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
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: '',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
        {
            type: 'single-choose',
            content:
                'Lorem ipsum dolor sore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            answers: [
                'consectetur adipiiusmod tempor',
                'consectetur adipiiusmod tempor',
                'adipiscing elit, sed do eiusmod tempor',
                'fasdf adipiscing elit, sed do eiusmod tempor',
            ],
            correctAnswer: 1,
            hint: '',
            explanation:
                'm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do',
            showExplanation: false,
            showHint: false,
            chosenAnswer: null,
            state: QUESTION_STATE.PENDDING,
        },
    ],
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        chooseAnswer: (state, action) => {
            /**
             * {
             *      questionIndex: Number
             *      chosenAnswer: Number
             * }
             */
            state.questions[action.payload.questionIndex].chosenAnswer = action.payload.chosenAnswer;
        },

        submitQuestion: (state, action) => {
            // payload --> questionIndex
            const question = state.questions[action.payload];
            question.showExplanation = true;
            if (question.chosenAnswer !== question.correctAnswer) {
                state.incorrectQuestion++;
                question.state = QUESTION_STATE.INCORRECT;
            } else {
                state.correctQuestion++;
                question.state = QUESTION_STATE.CORRECT;
            }
        },

        toggleShowExplation: (state, action) => {
            // payload --> questionIndex
            const question = state.questions[action.payload];
            question.showExplanation = !question.showExplanation;
        },
        toggleShowHint: (state, action) => {
            // payload --> questionIndex
            const question = state.questions[action.payload];
            question.showHint = !question.showHint;
        },

        nextQuestion: (state, action) => {
            if (state.currentQuestion < state.questions.length - 1) {
                state.currentQuestion++;
            }
        },
        prevQuestion: (state, action) => {
            if (state.currentQuestion > 0) {
                state.currentQuestion--;
            }
        },
        gotoQuestion: (state, action) => {
            if (action.payload < state.questions.length && action.payload >= 0) {
                state.currentQuestion = action.payload;
            }
        },

        complete: (state, action) => {},
    },
});

// Action creators are generated for each case reducer function
const quizReducer = quizSlice.reducer;
const quizActions = quizSlice.actions;

export default quizReducer;
export { quizActions };
