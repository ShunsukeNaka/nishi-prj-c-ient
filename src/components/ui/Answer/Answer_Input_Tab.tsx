import { Stack, TextField, Typography } from "@mui/material";
import RadioButton from "./RadioButton";
import { useState } from "react";
type Question = {
  number_str: string;
  question_text: string;
  question_type: string;
};

export default function Answer_Input_Tab(props: {q:Question, handleAnswered: (index: string) => void}){
    const [selectedValue, setSelectedValue] = useState("");
    const handleChange =
    (questionKey: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
      props.handleAnswered(questionKey); // ← Set に入れる用
    };

    return(
        <>
            <Stack direction={"column"} key={props.q.number_str} sx={{ mb: 2 }}>
                <Typography sx={{ mb: 1 }}>
                    {props.q.number_str}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                    {props.q.question_text}
                </Typography>
                
                {props.q.question_type === "radio-YN" && (
                    <Stack key={props.q.number_str} direction={"row"}justifyContent="center" alignItems="center" sx={{alignItems: "center"}}>
                        <Typography>No</Typography>
                        <RadioButton value={"0"} selectedValue={selectedValue} handleChange={handleChange(props.q.number_str)}/>
                        <RadioButton value={"1"} selectedValue={selectedValue} handleChange={handleChange(props.q.number_str)}/>
                        <RadioButton value={"2"} selectedValue={selectedValue} handleChange={handleChange(props.q.number_str)}/>
                        <RadioButton value={"3"} selectedValue={selectedValue} handleChange={handleChange(props.q.number_str)}/>
                        <RadioButton value={"4"} selectedValue={selectedValue} handleChange={handleChange(props.q.number_str)}/>
                        <Typography>Yes</Typography>
                    </Stack>
                )}

                {props.q.question_type === "textfield" && (
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
        </>
    )
}