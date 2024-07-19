const itemForm = document.getElementById("comments__container__new-comment");
const dynamicContent = document.getElementById("comments__container__wrapper");



let currentDate = new Date();
let currentDateDay = currentDate.getDate();
let currentDateMonth = currentDate.getMonth();
let currentDateYear = currentDate.getFullYear();

/*Added + 1 to the month gven that January is 0 */
//DOES THE MONTH NEEDS TO BE DISPLAYED AS 01 OR 1???
let actualTimeStamp = currentDateMonth + 1 + "/" + currentDateDay + "/" + currentDateYear;


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
];

itemForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let newUserName = event.target.inputUserName.value;
    let newContentComment = event.target.inputComment.value;

    let newComment = {
        userName: itemForm.elements["inputUserName"].value,
        timeStamp: actualTimeStamp,
        content: itemForm.elements["inputComment"].value
    };
    
    comments.push(newComment);
    displayCurrentComments();

    itemForm.reset();
});


const currentComments = (comment) => {


    let currentCommentsParent = document.createElement("div");
    currentCommentsParent.classList.add("comments__container__wrapper__area");
    dynamicContent.appendChild(currentCommentsParent);



    let currentCommentsWrapper = document.createElement("article");
    currentCommentsWrapper.classList.add("comments__container__wrapper__area__comment-section");
    currentCommentsParent.appendChild(currentCommentsWrapper);

    let currentAvatar =  document.createElement("div"); /*SHOULD I USE DIV OR IMG*/
    currentAvatar.classList.add("comments__container__wrapper__area__comment-section__avatar");
    currentCommentsWrapper.appendChild(currentAvatar);
    
    let currentCommentsCard = document.createElement("div");
    currentCommentsCard.classList.add("comments__container__wrapper__area__comment-section__card");
    currentCommentsWrapper.appendChild(currentCommentsCard);

    let currentCommentsCardBox = document.createElement("div");
    currentCommentsCardBox.classList.add("comments__container__wrapper__area__comment-section__card__box");
    currentCommentsCard.appendChild(currentCommentsCardBox);

    let currentCommentsName = document.createElement("p");
    currentCommentsName.classList.add("comments__container__wrapper__area__comment-section__card__box--user-name");
    currentCommentsName.innerText = comment.userName;
    currentCommentsCardBox.appendChild(currentCommentsName);

    let currentCommentsTimeStamp = document.createElement("p");
    currentCommentsTimeStamp.classList.add("comments__container__wrapper__area__comment-section__card__box--time-stamp");
    currentCommentsTimeStamp.innerText = comment.timeStamp;
    currentCommentsCardBox.appendChild(currentCommentsTimeStamp);

    let currentCommentsContent = document.createElement("p");
    currentCommentsContent.classList.add("comments__container__wrapper__area__comment-section__card--content");
    currentCommentsContent.innerText = comment.content;
    currentCommentsCard.appendChild(currentCommentsContent);
}

const displayCurrentComments = () => {
    dynamicContent.innerHTML = "";
    for(i = 0; i < comments.length; i++) {
        currentComments(comments[i]);
    }
}

displayCurrentComments();