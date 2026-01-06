import { Radio } from "@mui/material";

export default function RadioButton(props: {value: string, selectedValue: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;}) {
    return (
        <>
            <Radio
                checked={props.selectedValue === props.value}
                onChange={props.handleChange}
                value={props.value}
                name="radio-buttons"
                inputProps={{ "aria-label": props.value }}
                sx={{ color: "white" }}
            />
        </>
    )
}