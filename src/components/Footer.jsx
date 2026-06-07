function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <p className="footerText">
                &copy;  {year} Personal Blog
            </p>
        </footer>
    )
}

export default Footer