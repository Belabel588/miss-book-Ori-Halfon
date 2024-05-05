import { BookIndex } from "./pages/BookIndex.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"
import { HomePage } from "./pages/HomePage.jsx"

const { useState } = React

export function RootCmp() {

    const [route, setRoute] = useState('Books')

    return (
        <React.Fragment>
            <header className="main-header">

                <h1>Hello React</h1>
                <nav className="main-nav">
                    <a onClick={() => setRoute('HomePage')} href="#">Home</a>
                    <a onClick={() => setRoute('AboutUs')} href="#">About</a>
                    <a onClick={() => setRoute('BookIndex')} href="#">Books</a>
                </nav>
            </header>
            <main className="content-grid">
                {route === 'HomePage' && <HomePage />}
                {route === 'BookIndex' && <BookIndex />}
                {route === 'AboutUs' && <AboutUs />}
            </main>
        </React.Fragment>
    )
}