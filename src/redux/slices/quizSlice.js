import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
            hint: '',
            explanation: 'Hahaha',
            chosenAnswer: null,
            submited: false,
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
            state.questions[action.payload].submited = true;
        },
    },
});

// Action creators are generated for each case reducer function
const quizReducer = quizSlice.reducer;
const quizActions = quizSlice.actions;

export default quizReducer;
export { quizActions };
