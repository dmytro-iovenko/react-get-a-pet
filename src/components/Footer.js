function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id='footer'>
            <a href><i className='social-icon fab fa-facebook-f'/></a>
            <a href><i className='social-icon fab fa-twitter'/></a>
            <a href><i className='social-icon fab fa-instagram'/></a>
            <a href><i className='social-icon fas fa-envelope'/></a>
            <p>© Copyright {year} Get-a-Pet - Powered by <a href='https://www.petfinder.com/developers/' target='_blank' rel='noreferrer'>Petfinder
                API</a></p>
        </footer>
    );
}

export default Footer;


