function Header() {
    // here we can write html and jsx
    return (
        // here we can write the pure HTML, only we can return the single element so that we have to use the **<></>**
        <header>
            <h1> My website </h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>

        </header>


    );

}
export default Header;