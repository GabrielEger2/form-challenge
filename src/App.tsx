import { useState } from 'react';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [githubRepoUrl, setGithubRepoUrl] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/',
        {
          email,
          githubRepoUrl,
        }
      );

      if (response.status === 200) {
        console.log('Success');
        // Handle success response, e.g., show a success message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="GitHub Repo URL"
              type="url"
              value={githubRepoUrl}
              onChange={(e) => setGithubRepoUrl(e.target.value)}
              required
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default App;