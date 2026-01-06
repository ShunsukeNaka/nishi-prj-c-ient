import { Box, Card, CardActionArea, Typography } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";

export default function DiagnosisMenuButton(props: {maintext: string, subtext: string, icon: SvgIconComponent}) {
    const Icon = props.icon;

    return (
        <>
            <Card sx={{width: "50%", alignContent: "center", alignItems: "center" }}>
                <CardActionArea>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        <Icon sx={{ fontSize: 100, mr: 2 }} />
                        <Box sx={{ textAlign: "center", width: "100%" }}>
                            <Typography variant="h5">
                                {props.maintext}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {props.subtext}
                            </Typography>
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </>
    )
}