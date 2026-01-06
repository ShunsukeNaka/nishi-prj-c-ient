import { Typography } from "@mui/material";

export default function PageTitle(props: {text: string}) {
    
    return (
        <>
            <Typography sx={{color: "white", fontSize: 35, textAlign: "center"}}>
                {props.text}
            </Typography>
        </>
    )
}