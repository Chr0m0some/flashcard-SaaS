import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Typography } from "@mui/material";
import { Button, Container, Box, AppBar, Toolbar, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" gutterBottom>
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" components="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography variant="body1">
              Simply input your text and let our software do the rest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography variant="body1">
              Our AI intelligently creates flashcards from your text.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography variant="body1">
              Save your flashcards to your account and access them from
              anywhere.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4">Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ border: "1px solid grey", borderRadius: 2, p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month
              </Typography>
              <Typography variant="body1">
                Access to basic flashcards and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Get Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ border: "1px solid grey", borderRadius: 2, p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / month
              </Typography>
              <Typography variant="body1">
                Unlimited flashcards and storage with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Get Basic
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
