import { Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import RadioButton from "./RadioButton";
import Answer_Input_Tab from "./Answer_Input_Tab";
type Question = {
  number_str: string;
  question_text: string;
  question_type: string;
};

export default function AnswerInput(props: {text: string, input_questions: Question[], handleAnswered: (index: string) => void}) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [selectedValue, setSelectedValue] = useState('a');

    console.log(props.text)
    useEffect(() => {
        setQuestions(props.input_questions);
        console.log(questions)
    }, []);

    


    return (
        <>
            <Stack direction="column" sx={{ color: "white", width: "90%"}}>
                {questions.map((q) => (
                    <Answer_Input_Tab q={q} handleAnswered={props.handleAnswered}/>
                ))}
            </Stack>
        </>
    )
}