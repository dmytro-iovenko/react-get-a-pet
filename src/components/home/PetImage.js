import pets from '../../images/pet-transparent-png.png';

function PetImage() {
    return (
        <section id='pets'>
            <img className='pets-image' src={pets} alt='pets' />
        </section>
    );
}

export default PetImage;