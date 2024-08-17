"use client";
import { SignUp } from "@clerk/clerk-react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static"></AppBar>{" "}
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Flashcard Saas
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passhref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-up" passhref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4">Sign Up</Typography>
        <SignUp />
      </Box>
    </Container>
  );
}
