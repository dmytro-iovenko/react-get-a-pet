import axios from "axios";

const baseURL = 'https://testimonialapi.free.beeceptor.com/';

export function getTestimonials() {
    return axios.get(baseURL)
        .then(response => response.data)
        .catch(error => console.log(error))
}
