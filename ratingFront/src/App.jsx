import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Stack, TextField, Typography, Button } from '@mui/material'
import './App.css'
import ReactStars from "react-rating-stars-component"

function App() {
  // const [count, setCount] = useState(0)

  const [formData, setFormData] = useState({
    rating: 0,
    comment: ''
  });

  const ratingChanged = (rate) => {
    // alert(`Rating : ${rate}`)
    setFormData(prevFormData => ({
      ...prevFormData,
      rating: rate
    }));
  }

  const handleCommentChange = (event) => {
    const { value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      comment: value
    }));
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <><Stack sx={{ background: "grey" }}>
      <Stack sx={{ border: "3px solid navy", padding: 7, bgcolor: "black", borderRadius: "30px", overflow: "hidden" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Stack>
              <Stack>
                <Typography fontSize={23}>Rate your writer 😍</Typography>
              </Stack>
              <ReactStars
                activeColor="yellow"
                size={100}
                isHalf={true}
                onChange={ratingChanged} />
            </Stack>
            <Stack>
              <TextField
                label="Your comment about service"
                value={formData.comment}
                onChange={handleCommentChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'yellow', // Default color
                    },
                    '&:hover fieldset': {
                      borderColor: 'yellow', // Hover color
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'yellow', // Default label color
                  },
                  '&:hover .MuiInputLabel-root': {
                    color: 'yellow', // Hover label color
                  },
                  '& .MuiInputBase-input': {
                    color: 'white', // Text color when typing
                  },
                }}>

              </TextField>
            </Stack>
            <Stack sx={{ alignItems: "center" }}>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "white",
                  color: "navy",
                  width: "15%",
                  borderColor: "white"
                }} >
                Send
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack></>
  )
}

export default App
