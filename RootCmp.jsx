

const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { BookIndex } from "./pages/BookIndex.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"
import { HomePage } from "./pages/HomePage.jsx"

import { AppHeader } from "./cmps/AppHeader.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"


export function RootCmp() {

    return (
        <Router>
            <AppHeader />
            <main className="content-grid">

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/BookIndex" element={<BookIndex />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Book/:bookId" element={<BookDetails />} />
                </Routes>

            </main>
        </Router>
    )
}