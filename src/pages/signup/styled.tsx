import { styled } from '@mui/system';
import Button from '@mui/material/Button';

// Define the custom styled Button component
export const CustomButton = styled(Button)({
    marginTop: '1rem',
    backgroundColor: 'green',
    padding: '40px 60px', // Add padding
    borderRadius: '20px', // Add border radius
    '&:hover': {
      backgroundColor: 'darkgreen', // Change background color on hover
    },
});