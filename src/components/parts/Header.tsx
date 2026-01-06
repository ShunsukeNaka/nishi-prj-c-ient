import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    
    return (
        <>
            <Box sx={{ flexGrow: 1, paddingBottom: "80px"}}>
                <AppBar sx={{backgroundColor: "#03ABA0"}}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/")}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        まいみーる
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}