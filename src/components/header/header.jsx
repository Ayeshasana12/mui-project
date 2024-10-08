import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Icons from '../../assets/Icons.png';

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#F5F7FA" }}>
          <Toolbar className='container' sx={{ display: "flex", justifyContent: "space-between" }}>

            <img src={Icons} alt='logo' />
            <Box>
              <Box className='d-flex'>
                <Link href="#" underline="none">
                  <Typography className='mx-3 fw-semibold text-black' variant='body1'> Home</Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography className='mx-3 fw-semibold text-black' variant='body1'> Service</Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography className='mx-3 fw-semibold text-black' variant='body1'> Feature</Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography className='mx-3 fw-semibold text-black' variant='body1'> Product</Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography className='mx-3 fw-semibold text-black' variant='body1'> Testimonial</Typography>
                </Link>

                <Link href="#" underline="none">
                  <Typography className='mx-3 fw-semibold text-black' variant='body1'> FAQ</Typography>
                </Link>
              </Box>
            </Box>
            
            <div>
              <Button className='mx-4 fw-semibold' sx={{color: "#4CAF4F"}} color="inherit">Login</Button>
              <Button className='fw-semibold' sx={{backgroundColor: "#4CAF4F"}}variant="contained">Sign up</Button>
            </div>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header