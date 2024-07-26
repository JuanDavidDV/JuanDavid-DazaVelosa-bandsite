const comments = [
    {
        userName: "Isaac Tadesse",
        timeStamp: Date.parse("10/20/2023"),
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
    {
        userName: "Christina Cabrera",
        timeStamp: Date.parse("10/28/2023"),
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        userName: "Victor Pinto",
        timeStamp: Date.parse("11/02/2023"),
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }
];

const commentForm = document.getElementById("commentForm");
const dynamicContent = document.getElementById("commentsContainerWrapperDynamic");

//NEED T0 POLISH THIS PART
const timeAgo = (timeStampAgo) => {
    let actualDate = new Date();
    let secondsAgo = (actualDate.getTime() - timeStampAgo) / 1000;
        if (secondsAgo === 0 || secondsAgo === 1) {
            return parseInt(secondsAgo) + " seconds ago";
        } else if (secondsAgo > 1  && secondsAgo <= 60) {
            return parseInt(secondsAgo) + " seconds ago";
        } else if (secondsAgo < 3600) {
            return parseInt(secondsAgo / 60) + " minutes ago";
        } else if (secondsAgo <= 86400) {
            return parseInt(secondsAgo / 3600) + " hours ago";
        } else if (secondsAgo <= 2628000) {
            return parseInt(secondsAgo / 86400) + " days ago";
        } else if (secondsAgo <= 31536000) {
            return parseInt(secondsAgo / 2628000) + " months ago";
        } else if (secondsAgo > 31536000) {
            return parseInt(secondsAgo / 31536000) + " years ago";
        }
};

commentForm.addEventListener("submit", (event) => {
    event.preventDefault(); //Prevents page to reload when submitting a new comment
    let newUserName = event.target.inputUserName.value;
    let newContentComment = event.target.inputComment.value;
    let newTimeStamp = new Date();

    if (newUserName.length === 0) {
        event.target.inputUserName.classList.add("comments__container__new-comment__user-info--name--invalid");
    } else {
        event.target.inputUserName.classList.remove("comments__container__new-comment__user-info--name--invalid");
    }
    if (newContentComment.length === 0) {
        event.target.inputComment.classList.add("comments__container__new-comment__user-info--comment--invalid");
    } else {
        event.target.inputComment.classList.remove("comments__container__new-comment__user-info--comment--invalid");
    }

    if(newUserName !== "" && newContentComment !== "") {
        //Constructs a new comment object
        let newComment = {
            userName: newUserName, //Takes value input from the form for the user name
            timeStamp: newTimeStamp,
            content: newContentComment,   //Takes value unput from the form for the comment content
        };
        
        comments.push(newComment);
        clearComments();    //Clears rep comments from page
        displayCurrentComments();   //Re-renders all comments to the page from the "comments" array
        commentForm.reset();   //Clears input fields after submitting a new commen
    } 

});

const currentComments = (comment) => {
    let currentCommentsParent = document.createElement("div");
    currentCommentsParent.classList.add("comments__container__wrapper__area");
    dynamicContent.appendChild(currentCommentsParent);

    let currentCommentsWrapper = document.createElement("article");
    currentCommentsWrapper.classList.add("comments__container__wrapper__area__comment-section");
    currentCommentsParent.appendChild(currentCommentsWrapper);

    let currentAvatar =  document.createElement("div"); 
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
    currentCommentsTimeStamp.innerText = timeAgo(comment.timeStamp);
    currentCommentsCardBox.appendChild(currentCommentsTimeStamp);

    let currentCommentsContent = document.createElement("p");
    currentCommentsContent.classList.add("comments__container__wrapper__area__comment-section__card--content");
    currentCommentsContent.innerText = comment.content;
    currentCommentsCard.appendChild(currentCommentsContent);
}

const displayCurrentComments = () => {
    comments.slice().reverse().forEach((commentsDisplayed) => currentComments(commentsDisplayed))   //Output comments chronologically by using .slice().reverse() functions
};

const clearComments = () => {
    dynamicContent.innerHTML = "";
}

displayCurrentComments();   // Invokes function to display default comments chronologically 