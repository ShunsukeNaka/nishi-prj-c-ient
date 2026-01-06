import { Card, CardActionArea, Typography } from "@mui/material";

export default function MyPageMenuButton(props: {text: string}) {
    return (
        <>
            <Card sx={{width: "50%", alignContent: "center", alignItems: "center" }}>
                <CardActionArea>
                    <Typography variant="h5" sx={{padding: "8px"}}>
                        {props.text}
                    </Typography>
                </CardActionArea>
            </Card>
        </>
    )
}