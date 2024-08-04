export default class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async postComment(newComment) {
        try {
            const sendComment = await axios.post(this.baseUrl + "/comments" + "?api_key=" + this.apiKey, newComment);
            const sendCommentData = sendComment.data;
            console.log(sendCommentData);
            return sendCommentData;
        }
        catch(error){
            console.error(error);
        }
    };

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
            console.log(commentsData);
            return sortComments();
        }
        catch(error) {
            console.error(error);
        }
    };

    async getShows() {
        try {
            const showsResult = await axios.get(this.baseUrl + "/showdates" + "?api_key=" + this.apiKey);
            const showsData = showsResult.data;
            return showsData;
        }
        catch(error) {
            console.error(error);
        }
    };

    async deleteComment(id) {
        try {
            const deleteComment = await axios.delete(this.baseUrl + "/comments/" + id + "?api_key=" + this.apiKey);
            const deleteCommentData = deleteComment.data;
            console.log(deleteCommentData);
            return deleteCommentData;
        }
        catch(error) {
            console.error(error);
        }
    };

    async likeComment(idLikes) {
        try {
            const likeComment = await axios.put(this.baseUrl + "/comments/" + idLikes + "/like" + "?api_key=" + this.apiKey);
            const likeCommentData = likeComment.data;
            console.log(likeCommentData);
            return likeCommentData;
        }
        catch(error) {
            console.error(error);
        }
    };
};


