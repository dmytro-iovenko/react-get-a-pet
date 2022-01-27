import axios from "axios";

const baseURL = 'https://testimonialapi.free.beeceptor.com/';
// function to get data from the server for testimonials
export function getTestimonials() {
    return axios.get(baseURL)
        .then(response => response.data)
        .catch(error => console.log(error))
}
