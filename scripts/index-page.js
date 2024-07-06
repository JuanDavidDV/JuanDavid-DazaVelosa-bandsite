let comments = [
    {
        userName: "Victor Pinto",
        timeStamp: "11/02/2023",
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        userName: "Christina Cabrera",
        timeStamp: "10/28/2023",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        userName: "Isaac Tadesse",
        timeStamp: "10/20/2023",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

let commentInfo = document.querySelector(".comments__container__comment-section__information");

let currentComment = (userComment) => {
    console.log(comments[userComment]);
}

currentComment(0);

let fullName = document.querySelector(".comments__container__comment-section__full-name");
fullName.innerText = comments[0].userName;

let timeStamp = document.querySelector(".comments__container__comment-section__time-stamp");
timeStamp.innerText = comments[0].timeStamp;

let content = document.querySelector(".comments__container__comment-section__content");
content.innerText = comments[0].content;


