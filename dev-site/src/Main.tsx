import { Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import Copyright from "./Copyright";
import Viewer from "./Viewer";

const theme = createTheme(); // Needed for MUI

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ bgcolor: "black" }}>
          <Avatar sx={{ bgcolor: lightGreen[500] }}>CN</Avatar>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          component="div"
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              3D Model Gallery
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              In the summer of 2019, I took an intro Cinema 4D course to learn
              about 3D Modeling. As I have been traveling around the world, I
              have recently been inspired to create visual art in the form of 3D
              Modeling, Animation, and Motion Graphics using Cinema 4D, Blender,
              and Maya.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Viewer />
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          ></Typography>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Divider />
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thank you for taking the time to look around!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
