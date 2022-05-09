import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright ©CNgai "}
      {new Date().getFullYear()}
      {" | For more info about my work and artistry, visit "}
      <Link color="inherit" href="https://www.cngai.info/">
        cngai.info
      </Link>
    </Typography>
  );
}
