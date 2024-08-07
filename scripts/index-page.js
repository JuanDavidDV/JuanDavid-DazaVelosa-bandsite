import BandSiteApi from './band-site-api.js';

const commentForm = document.getElementById("commentForm");
const dynamicContent = document.getElementById("commentsContainerWrapperDynamic");

//NEED T0 POLISH THIS PART
const timeAgo = (timeStampAgo) => {
    let actualDate = new Date();
    let secondsAgo = (actualDate.getTime() - timeStampAgo) / 1000;
        if (secondsAgo < 60) {
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

    //Prevents to upload content that do not have a name and a comment
    if(newUserName !== "" && newContentComment !== "") {       
        const newComment = new BandSiteApi("e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");
        const newCommentPost = await newComment.postComment(newCommentContent);
        console.log(newCommentPost);
        buildComment(newCommentPost, true);   //Re-renders all comments to the page from the "comments" array        
        //clearComments();    //Clears rep comments from page
        commentForm.reset();   //Clears input fields after submitting a new comment
    } 
});

//Change name of FUNTION
const buildComment = ( {name, timestamp, comment, id, likes}, isNewComment = false ) => {     //Passes only the name, timestamp and comment parameters from the comments variable from the displayCurrentComments function
    let currentCommentsParent = document.createElement("div");
    currentCommentsParent.setAttribute("id", id);
    currentCommentsParent.classList.add("comments__container__wrapper__area");
    
    if (isNewComment) {
        dynamicContent.insertBefore(currentCommentsParent, dynamicContent.firstChild);
    } else {
        dynamicContent.appendChild(currentCommentsParent);
    }

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
    currentLikeCount.setAttribute("id", "like");
    currentCommentsCardBoxRight.appendChild(currentLikeCount);

    let currentDeleteButton = document.createElement("img");
    currentDeleteButton.src = "../assets/icons/SVG/icon-delete.svg";
    currentDeleteButton.alt = "delete-button";
    currentDeleteButton.classList.add("comments__container__wrapper__area__comment-section__card__box--right--delete-button");
    currentDeleteButton.addEventListener("click", () => deleteComment(id));
    currentCommentsCardBoxRight.appendChild(currentDeleteButton);

    let currentCommentsTimeStamp = document.createElement("p");
    currentCommentsTimeStamp.classList.add("comments__container__wrapper__area__comment-section__card__box--right--time-stamp");
    currentCommentsTimeStamp.innerText = timeAgo(timestamp);
    currentCommentsCardBoxRight.appendChild(currentCommentsTimeStamp);

    let currentCommentsContent = document.createElement("p");
    currentCommentsContent.classList.add("comments__container__wrapper__area__comment-section__card--content");
    currentCommentsContent.innerText = comment;
    currentCommentsCard.appendChild(currentCommentsContent);
}

const displayCurrentComments = async () => {
    clearComments();
    const defaultComments = new BandSiteApi("e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");    //BandSiteApi instance
    const comments = await defaultComments.getComments(); 
    comments.forEach((commentsDisplayed) => buildComment(commentsDisplayed));
    console.log(comments);
    return comments;
};

const clearComments = () => {
    dynamicContent.innerHTML = "";
}
const deleteComment = async (id) => {
    const selectDeleteComment = new BandSiteApi("e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");
    const deleteCommentById = await selectDeleteComment.deleteComment(id); //deletes comment from API
    const parent = document.getElementById(id);
    parent.remove();    //deletes comment from HTML, this to peveent re-calling "displayCurrentComments()" function, given that it makes comment section to "blink", and reload the whole dynamic section
    //clearComments();
    //displayCurrentComments();

}

const likeComment = async (commentId) => {
    const selectLikedComment = new BandSiteApi("e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");
    const likedComment = await selectLikedComment.likeComment(commentId);
    const likedCommentCount = likedComment.likes;
    console.log(likedCommentCount);
    const parent = document.getElementById(commentId);
    const likeElement = parent.querySelector("#like");  //Update just the like
    likeElement.innerHTML = likedCommentCount;

    //buildComment(commentId, true);
    //clearComments();
    //displayCurrentComments();

}

displayCurrentComments();  // Invokes function to display default comments chronologically 