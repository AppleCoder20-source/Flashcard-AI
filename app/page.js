"use client"; // Add this at the top if this page needs to be client-side only

import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"; // Correct capitalization
import Head from"next/head"; 

import {Toolbar, Typography, Container, AppBar, Button, Box,Grid } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head> 
        <title> Flashcard SaaS</title>
        <meta name = "description" content="Create flashcard from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx = {{
          textAlign: 'center',
          my:4,
        }}
      > 
        <Typography variant = "h2" gutterBottom> 
          Welcome to FlashCard Saas
        </Typography>
        <Typography variant = "h5" gutterBottom>
          {' '}
          The easiest way to make flashcards from your text 
        </Typography>
        <Button variant = "contained" color="primary" sx={{mt: 2}}>
          Get Started 
        </Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant ="h4" components = "h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs= {12} md = {4}>
            <Typography variant = "h6" gutterBottom> Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest. 
              Creating flashcards has never been easier when you use our AI service!!!
    
            </Typography>
          </Grid>
          <Grid item xs= {12} md = {4}>
            <Typography variant = "h6">Smart Flashcards</Typography>
            <Typography>
              {' '}
              Our AI breaksdown your text into concise flashcards perfect for studying!

            </Typography>
          </Grid>
          <Grid item xs= {12} md = {4}>
            <Typography variant = "h6">Accesible Anywhwere</Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time, Study on the go with ease.  
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx = {{my:6, textAlign: 'center'}}>
        <Typography variant="h4"> Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs= {12} md = {4}>
            <Box
              sx={{
                p:3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}
              >
                <Typography variant = "h5"> Basic</Typography>
                <Typography variant = "h6"> $5 month</Typography>
                <Typography>
                  {' '}
                  Access to our basic pricing for flashcard features, this plan has limited storage!
                </Typography>
                <Button variant = "contained" color = "primary" sx={{mt:2}}>
                  Choose Basic Plan
                </Button>
              </Box>
          </Grid>
        </Grid>

      </Box>
    </Container>
  )
}
