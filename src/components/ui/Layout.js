import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Container } from 'react-bootstrap'

export default function Layout() {
    return (
        <>  
            <Container className='contain'>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Container>
        </>
    )
}
