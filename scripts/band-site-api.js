export default class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async getComments() {
        try {
            const result = await axios.get(this.baseUrl + "/comments" + "?api_key=" + this.apiKey);
            const data = result.data;

            const sortComments = () => {  //Sorts comments from newest to oldest when extracting them from API
                let timeDifference = (a, b) => {
                    const timeA = a.timestamp;
                    const timeB = b.timestamp;
                    return timeB - timeA; 
                }
                const commentsOrdered = data.sort(timeDifference);
                return commentsOrdered;
            };
            return sortComments();
        }
        catch(error) {
            console.error(error);
        }
    }

    async getShows() {
    
    }
};

const test = async () => {
    const results = await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");
    console.log(results);
}

test();


