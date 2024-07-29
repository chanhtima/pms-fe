"use client"

import { Button, Grid, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <div className='ml-5 mr-auto'>
            <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <Typography variant="h5" className='font-bold text-2xl' gutterBottom>
                                ไม่พบหน้านี้
                            </Typography>
                            <Button variant="contained" style={{ color: 'white' }} onClick={() => window.location.href = '/'}>ย้อนกลับ</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}