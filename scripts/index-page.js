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

const currentComments = (comment) => {

    let currentCommentsParent = document.querySelector(".comments__container__comment-section");

    let currentAvatar =  document.createElement("div"); /*SHOULD I USE DIV OR IMG*/
    currentAvatar.classList.add("comments__container__comment-section__avatar");
    currentCommentsParent.appendChild(currentAvatar);

    let currentCommentsBoxOne = document.createElement("div");
    currentCommentsBoxOne.classList.add("comments__container__comment-section__box1");
    currentCommentsParent.appendChild(currentCommentsBoxOne);

    let currentCommentsName = document.createElement("p");
    currentCommentsName.classList.add("comments__container__comment-section__box1--user-name");
    currentCommentsName.innerText = comment.userName;
    currentCommentsBoxOne.appendChild(currentCommentsName);

    let currentCommentsTimeStamp = document.createElement("p");
    currentCommentsTimeStamp.classList.add("comments__container__comment-section__box1--time-stamp");
    currentCommentsTimeStamp.innerText = "2000/09/20";
    currentCommentsBoxOne.appendChild(currentCommentsTimeStamp);

    let currentCommentsContent = document.createElement("p");
    currentCommentsContent.classList.add("comments__container__comment-section__box1--content");
    currentCommentsContent.innerText = "Hello World";
    currentCommentsBoxOne.appendChild(currentCommentsContent);
}

const displayCurrentComments = () => {
    for(i = 0; i < comments.length; i++) {
        currentComments(comments[i]);
    }
}

displayCurrentComments();





