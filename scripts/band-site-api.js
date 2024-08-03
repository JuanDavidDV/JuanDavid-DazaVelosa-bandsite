export default class BandSiteApi {
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
            //console.log(data);
            return data;
        }
        catch(error) {
            console.error(error);
        }
    } 
}


// const employees = [
//     {
//         name: "Peter",
//         age: 19,
//         date: "22 aug 1990"
//     },
//     {
//         name: "Juan",
//         age: 23,
//         date: "20 sept 1986"
//     },
//     {
//         name: "Ringo",
//         age: 12,
//         date: "10 jan 1992"
//     }
// ];



// let customSort = (a, b) => {
//     const dateA = new Date(a.date);
//     const dateB = new Date(b.date);

//     return dateB - dateA;
// }


// console.log(employees.sort(customSort));
