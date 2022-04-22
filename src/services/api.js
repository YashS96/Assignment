import axios from 'axios'

export const gender = async (name) => {
    try{
        let response = await axios.get(`https://api.genderize.io?name=${name}`)
         return response.data
    }
    catch(error){
        console.error(`genderize API error: ${error}`)
    }
}

export const age = async (name) => {
    try{
        let response = await axios.get(`https://api.agify.io?name=${name}`)
         return response.data
    }
    catch(error){
        console.error(`ageify API error: ${error}`)
    }
}

export const nationality = async (name) => {
    try{
        let response = await axios.get(`https://api.nationalize.io?name=${name}`)
         return response.data
    }
    catch(error){
        console.error(`nationalize API error: ${error}`)
    }
}