import { Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import imiruData from "../../../testdata/imiru.json";
import RadioButton from "./RadioButton";
type Question = {
  number_str: string;
  question_text: string;
  question_type: string;
};

export default function ButtonAnswer(props: {text: string}) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [selectedValue, setSelectedValue] = useState('a');

    
    console.log(props.text)
    useEffect(() => {
        setQuestions(imiruData.questions);
        console.log(questions)
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    

    return (
        <>
            <Stack direction="column" sx={{ color: "white", width: "90%"}}>
                {questions.map((q) => (
                    <Stack direction={"column"} key={q.number_str} sx={{ mb: 2 }}>
                        <Typography sx={{ mb: 1 }}>
                            {q.number_str}
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            {q.question_text}
                        </Typography>
                        
                        {q.question_type === "radio-YN" && (
                            <Stack direction={"row"}justifyContent="center" alignItems="center" sx={{alignItems: "center"}}>
                                <Typography>No</Typography>
                                <RadioButton value={"0"} selectedValue={selectedValue} handleChange={handleChange}/>
                                <RadioButton value={"1"} selectedValue={selectedValue} handleChange={handleChange}/>
                                <RadioButton value={"2"} selectedValue={selectedValue} handleChange={handleChange}/>
                                <RadioButton value={"3"} selectedValue={selectedValue} handleChange={handleChange}/>
                                <RadioButton value={"4"} selectedValue={selectedValue} handleChange={handleChange}/>
                                <Typography>Yes</Typography>
                            </Stack>
                        )}

                        {q.question_type === "textfield" && (
                            <TextField
                              fullWidth
                              placeholder="任意"
                              sx={{ "& .MuiOutlinedInput-root": {
                                        backgroundColor: "white",
                                        borderRadius: 999,
                                    }
                                }}
                            />
                        )}
                    </Stack>
                ))}
            </Stack>
        </>
    )
}