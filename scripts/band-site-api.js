export default class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async getComments() {
        try {
            const commentsResult = await axios.get(this.baseUrl + "/comments" + "?api_key=" + this.apiKey);
            const commentsData = commentsResult.data;

            const sortComments = () => {  //Sorts comments from newest to oldest when extracting them from API
                let timeDifference = (a, b) => {
                    const timeA = a.timestamp;
                    const timeB = b.timestamp;
                    return timeB - timeA; 
                }
                const commentsOrdered = commentsData.sort(timeDifference);
                return commentsOrdered;
            };
            return sortComments();
        }
        catch(error) {
            console.error(error);
        }
    }

    async getShows() {
        try {
            const showsResult = await axios.get(this.baseUrl + "/showdates" + "?api_key=" + this.apiKey);
            const showsData = showsResult.data;
            return showsData;
        }
        catch(error) {
            console.error(error);
        }
    }
};


