const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return <header className="main-header">

    <h1>Hello React</h1>
    <nav className="main-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/BookIndex">Books</NavLink>
      <NavLink to="/AboutUs">About</NavLink>


    </nav>
  </header >

}

