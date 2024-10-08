import { Button, Typography } from '@mui/material'
import React from 'react'
import HeroImg from '../../assets/hero.png'

function HeroSection() {
    return (

        <div className='container d-flex justify-content-between align-content-center' sx={{ backgroundColor: "#F5F7FA" }}>
            <div>
                <div>
                    <Typography className='fw-bold' sx={{ marginTop: "30%" }} variant="h3">Lessons and insights</Typography>
                    <Typography className='fw-bold my-2' sx={{ color: "#4CAF4F" }} variant='h3'>from 8 years</Typography>
                    <span className='pt-3'>Where to grow your business as a photographer: site or social media?</span>
                </div>
                <Button className='fw-semibold mt-4' sx={{ backgroundColor: "#4CAF4F" }} variant="contained">Register</Button>
            </div>
            <img  className='img-fluid mt-5' src={HeroImg} alt="logo" />
        </div>

    )
}

export default HeroSection