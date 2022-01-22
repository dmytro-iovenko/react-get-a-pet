function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id='footer'>
            {/* <a href><i className='social-icon fab fa-facebook-f'></i></a>
            <a href><i className='social-icon fab fa-twitter'></i></a>
            <a href><i className='social-icon fab fa-instagram'></i></a>
            <a href><i className='social-icon fas fa-envelope'></i></a> */}
            <p>© Copyright {year} Get-a-Pet - Powered by <a href='https://www.petfinder.com/developers/' target='_blank' rel='noreferrer'>Petfinder
                API</a></p>
        </footer>
    );
}

export default Footer;


