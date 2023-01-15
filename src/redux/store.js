import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quizSlice';

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    // Save to localStorage
    const state = store.getState();
    localStorage.setItem('pmcs_quiz', JSON.stringify(state.quiz));

    return result;
};

const reHydrateStore = () => {
    if (localStorage.getItem('pmcs_quiz') !== null) {
        return {
            quiz: JSON.parse(localStorage.getItem('pmcs_quiz')),
        };
    }

    return {
        quiz: null,
    };
};

const store = configureStore({
    reducer: { quiz: quizReducer },
    // preloadedState: reHydrateStore(),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
