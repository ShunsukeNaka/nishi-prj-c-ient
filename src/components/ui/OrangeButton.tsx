import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function OrangeButton(props: {text: string, path: string}) {
    const navigate = useNavigate();

    return (
        <>
            <Button
                sx={{background: "linear-gradient(-45deg, #ff5500ff 10%, #ffbe73ff 90%)",
                    color: "white",
                    px: 10,
                    borderRadius: "999px",
                    fontWeight: "bold",
                    fontSize: "24px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                    "&:hover": {
                    background: "linear-gradient(-45deg, #ff5500e1 10%, #ffbe73e4 90%)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
                },}} 
                onClick={() => navigate(props.path)}
                >
                {props.text}
            </Button>
        </>
    )
}