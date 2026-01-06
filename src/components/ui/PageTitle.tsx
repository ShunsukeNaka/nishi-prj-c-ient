import { Typography } from "@mui/material";

export default function PageTitle(props: {text: string}) {
    
    return (
        <>
            <Typography sx={{color: "white", fontSize: 35, textAlign: "center", padding: 2, paddingBottom: "40px"}}>
                {props.text}
            </Typography>
        </>
    )
}