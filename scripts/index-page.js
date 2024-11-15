import BandSiteApi from './band-site-api.js';

const commentForm = document.getElementById("commentForm"); //Variable created to create event listener "submit" for the form
const dynamicContent = document.getElementById("commentsContainerWrapperDynamic");  //Variable created to manipulate DOM section for dynamic content of the comments 

//Function creates a dynamic timestamp
const timeAgo = (timeStampAgo) => {
    let actualDate = new Date();
    let secondsAgo = (actualDate.getTime() - timeStampAgo) / 1000;
        if (secondsAgo < 30) {
            return "Just now";
        } else if(secondsAgo < 60) {
            return parseInt(secondsAgo) + " sec ago";
        } else if (secondsAgo < 3600) {
            return parseInt(secondsAgo / 60) + " min ago";
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

commentForm.addEventListener("submit", async (event) => {
    event.preventDefault(); //Prevents page to reload when submitting a new comment
    const newUserName = event.target.inputUserName.value;
    const newContentComment = event.target.inputComment.value;

    const newCommentContent = {
        name: newUserName,
        comment: newContentComment
    };

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

    if(newUserName !== "" && newContentComment !== "") {    //Prevents to upload content that do not have a name and a comment
        const newComment = new BandSiteApi("67b5c21e-c789-4b4f-8213-c3c8ff8da2f2");
        const newCommentPost = await newComment.postComment(newCommentContent);
        buildComment(newCommentPost);   //Builds comment   
        displayCurrentComments();   //Re-renders all comments to the page
        clearComments();    //Clears rep comments from the page
        commentForm.reset();   //Clears input fields after submitting a new comment
    } 
});

const buildComment = ( {name, timestamp, comment, id, likes} ) => {
    let currentCommentsParent = document.createElement("div");
    currentCommentsParent.classList.add("comments__container__wrapper__area");
    currentCommentsParent.setAttribute("id", id);   //Atribute created to individually select parent comment in functions and methods by id
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
    currentCommentsName.innerText = name;
    currentCommentsCardBox.appendChild(currentCommentsName);

    let currentCommentsCardBoxRight = document.createElement("div");
    currentCommentsCardBoxRight.classList.add("comments__container__wrapper__area__comment-section__card__box--right");
    currentCommentsCardBox.appendChild(currentCommentsCardBoxRight);

    let currentLikeButton = document.createElement("img");
    currentLikeButton.src = "../assets/icons/SVG/icon-like.svg"
    currentLikeButton.alt = "like-button";
    currentLikeButton.classList.add("comments__container__wrapper__area__comment-section__card__box--right--like-button");
    currentLikeButton.addEventListener("click", () => likeComment(id));
    currentCommentsCardBoxRight.appendChild(currentLikeButton);

    let currentLikeCount = document.createElement("span");
    currentLikeCount.classList.add("comments__container__wrapper__area__comment-section__card__box--right--like-count");
    currentLikeCount.innerText = `${likes}`;
    currentLikeCount.setAttribute("id", "like");    //creates an id attribute to this span element
    currentCommentsCardBoxRight.appendChild(currentLikeCount);

    let currentDeleteButton = document.createElement("img");
    currentDeleteButton.src = "../assets/icons/SVG/icon-delete.svg";
    currentDeleteButton.alt = "delete-button";
    currentDeleteButton.classList.add("comments__container__wrapper__area__comment-section__card__box--right--delete-button");
    currentDeleteButton.addEventListener("click", () => deleteComment(id));
    currentCommentsCardBoxRight.appendChild(currentDeleteButton);

    let currentCommentsTimeStamp = document.createElement("p");
    currentCommentsTimeStamp.classList.add("comments__container__wrapper__area__comment-section__card__box--right--time-stamp");
    currentCommentsTimeStamp.setAttribute("id", "time");
    currentCommentsTimeStamp.innerText = timeAgo(timestamp);
    currentCommentsCardBoxRight.appendChild(currentCommentsTimeStamp);

    let currentCommentsContent = document.createElement("p");
    currentCommentsContent.classList.add("comments__container__wrapper__area__comment-section__card--content");
    currentCommentsContent.innerText = comment;
    currentCommentsCard.appendChild(currentCommentsContent);
}

const displayCurrentComments = async () => {
    clearComments();
    const defaultComments = new BandSiteApi("67b5c21e-c789-4b4f-8213-c3c8ff8da2f2"); 
    const comments = await defaultComments.getComments(); 
    comments.forEach((commentsDisplayed) => buildComment(commentsDisplayed));
    return comments;
};

const clearComments = () => {
    dynamicContent.innerHTML = "";
}
const deleteComment = async (id) => {
    const selectDeleteComment = new BandSiteApi("67b5c21e-c789-4b4f-8213-c3c8ff8da2f2");
    const deleteCommentById = await selectDeleteComment.deleteComment(id); //deletes comment from API
    const parent = document.getElementById(id); //Selects parent comment by ID to be deleted in the UI
    return parent.remove(); //Removes comment from the HTML display
}

const likeComment = async (id) => {
    const selectLikedComment = new BandSiteApi("67b5c21e-c789-4b4f-8213-c3c8ff8da2f2");
    const likedComment = await selectLikedComment.likeComment(id);
    const likedCommentCount = likedComment.likes;

    const parent = document.getElementById(id);  //variable created to precisely select appropiate comment parent by the object ID to display # of likes
    const likeElement = parent.querySelector("#like"); 
    return likeElement.innerText = likedCommentCount;
}

displayCurrentComments();  // Invokes function to display default comments chronologically 