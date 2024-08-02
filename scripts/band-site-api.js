export default BandSiteApi;

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }
    //https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4
    //this.baseUrl + "/comments" + "?api_key=" + this.apiKey;

    async getComments() {
        try {
            const result = await axios.get(this.baseUrl + "/comments" + "?api_key=" + this.apiKey);
            const data = result.data;
            return data;
        }
        catch(error) {
            console.error(error);
        }
    }   
}