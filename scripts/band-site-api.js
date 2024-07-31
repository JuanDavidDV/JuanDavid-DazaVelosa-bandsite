const endpointUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";
const key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

class BandSiteApi {
    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    
}

//Returns 3 default comments
async function getData() {
    try {
        const result = await axios.get(endpointUrl);
        const data = result.data;
        return console.log(data);
    } catch(error) {
        console.log(error)
    }
}

getData();

const getAxios = axios.get(endpointUrl);
console.log(getAxios);