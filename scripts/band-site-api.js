export default class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async postComment(newComment) {
        try {
            const sendComment = await axios.post(this.baseUrl + "/comments" + "?api_key=" + this.key, newComment);
            console.log(sendComment.data);
            let testGet = await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");
            let testGetData = testGet.data;
            return console.log(testGetData);
        }
        catch(error){
            console.error(error);
        }
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


