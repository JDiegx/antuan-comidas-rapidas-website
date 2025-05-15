import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LinkInBio from '../pages/LinkInBio/LinkInBio.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'
import Home from '../pages/Home/Home.jsx'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LinkInBio />} />
                <Route path="/linkinbio" element={<LinkInBio />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter