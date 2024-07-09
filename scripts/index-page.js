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

const pastCommentsParent = document.querySelector(".comments__container__comment-section");

let pastCommentsAvatar = document.createElement("div"); //SHOULD I USE DIV OR IMG FOR THE PAST COMMENTS AVATAR? WHEN I USE IMAGE THERE IS A GRAY SURROUNDOING LINE, BUT WHEN I USE DIV IT DISAPPERAS
pastCommentsAvatar.classList.add("comments__container__comment-section__avatar");
pastCommentsParent.appendChild(pastCommentsAvatar);

let pastCommentUserInput = document.createElement("div");
pastCommentUserInput.classList.add("comments__container__comment-section__box");
pastCommentsParent.appendChild(pastCommentUserInput);

let pastCommentsName = document.createElement("p");
pastCommentsName.classList.add("comments__container__comment-section__box--userName");
pastCommentsName.innerText = "Juan David";
pastCommentUserInput.appendChild(pastCommentsName);

let pastCommentsTimeStamp = docuemnt.createElement("p");
pastCommentsTimeStamp.classList.add()


