const endpointUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";
const key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = endpointUrl;
    }

    
}

//Returns 3 default comments
const getComments = async () => {
    try {
        const result = await axios.get(endpointUrl);
        const data = result.data;
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
};

getComments();
