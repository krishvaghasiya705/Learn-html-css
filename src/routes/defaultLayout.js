import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import Header from '../common/header'
import ScrollToTop from '../components/Scrollredirection'

export default function DefaultLayout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
