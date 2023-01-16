import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { quizActions } from '../../../../redux/slices/quizSlice';
import SingleChoice from './SingleChoice';

const animGroup = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.2,
        },
    },
};
function SingleChoiceGroup({ answers, correctAnswer, chosenAnswer, questionIndex, submited }) {
    const dispatch = useDispatch();
    function handleChoose(answer) {
        dispatch(
            quizActions.chooseAnswer({
                questionIndex,
                chosenAnswer: answer,
            })
        );
    }

    return (
        <motion.div
            key={questionIndex}
            className="mt-10 space-y-3"
            variants={animGroup}
            initial="hidden"
            animate="show"
        >
            {answers?.map((answer, index) => (
                <SingleChoice
                    key={index + questionIndex * 10}
                    chosen={chosenAnswer === index}
                    incorrect={submited && chosenAnswer === index && chosenAnswer !== correctAnswer}
                    answer={submited && correctAnswer === index}
                    disabled={submited}
                    onClick={() => handleChoose(index)}
                >
                    {answer}
                </SingleChoice>
            ))}
        </motion.div>
    );
}

export default SingleChoiceGroup;
