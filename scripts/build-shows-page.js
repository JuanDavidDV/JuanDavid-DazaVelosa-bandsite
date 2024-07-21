const shows = document.getElementById("shows");

let showsContainerTop = document.createElement("div");
showsContainerTop.classList.add("shows__container--top");
shows.appendChild(showsContainerTop);

const showsTitle = document.createElement("h2");
showsTitle.classList.add("shows__container__title");
showsTitle.innerText = "Shows";
showsContainerTop.appendChild(showsTitle);

let showLocation = "San Francisco, CA";
let isClicked = false;

const showTicketsDetails = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: showLocation
    }, 
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: showLocation
    }, 
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: showLocation
    }, 
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: showLocation
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: showLocation
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: showLocation
    }
];

const showTickets = (tickets, i) => {
    let showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");
    showsContainer.setAttribute("id", i);
    shows.appendChild(showsContainer);

    const showsWrapper = document.createElement("div");
    showsWrapper.classList.add("shows__container__wrapper");
    showsContainer.appendChild(showsWrapper);

    let showsWrapperDateLabel = document.createElement("p");
    showsWrapperDateLabel.classList.add("shows__container__wrapper__label");
    showsWrapperDateLabel.innerText = "DATE";
    showsWrapper.appendChild(showsWrapperDateLabel);

    let showsWrapperDateValue = document.createElement("h3");
    showsWrapperDateValue.classList.add("shows__container__wrapper__value");
    showsWrapperDateValue.innerText = tickets.date;
    showsWrapper.appendChild(showsWrapperDateValue);

    let showsWrapperVenueLabel = document.createElement("p");
    showsWrapperVenueLabel.classList.add("shows__container__wrapper__label");
    showsWrapperVenueLabel.innerText = "VENUE";
    showsWrapper.appendChild(showsWrapperVenueLabel);

    let showsWrapperVenueValue = document.createElement("p");
    showsWrapperVenueValue.classList.add("shows__container__wrapper__value");
    showsWrapperVenueValue.innerText = tickets.venue;
    showsWrapper.appendChild(showsWrapperVenueValue);

    let showsWrapperLocationLabel = document.createElement("p");
    showsWrapperLocationLabel.classList.add("shows__container__wrapper__label");
    showsWrapperLocationLabel.innerText = "LOCATION";
    showsWrapper.appendChild(showsWrapperLocationLabel);

    const showsWrapperLocationValue = document.createElement("p");
    showsWrapperLocationValue.classList.add("shows__container__wrapper__value");
    showsWrapperLocationValue.innerText = tickets.location;
    showsWrapper.appendChild(showsWrapperLocationValue);

    const showsWrapperButton = document.createElement("button");
    showsWrapperButton.classList.add("shows__container__wrapper__button");
    showsWrapperButton.innerText = "BUY TICKETS";
    showsWrapper.appendChild(showsWrapperButton);

    createDividers();
};

const displayCurrentShows = () => {
    for(let i = 0; i < showTicketsDetails.length; i++) {
        showTickets(showTicketsDetails[i], i);
    }
};

const createDividers = () => {
    const showsWrapperDivider = document.createElement("hr");
    showsWrapperDivider.classList.add("shows__divider");
    shows.appendChild(showsWrapperDivider);
    return showsWrapperDivider;
}

displayCurrentShows();

let eventClicked = document.querySelectorAll(".shows__container");
for (let i = 0; i < eventClicked.length; i++) {
    eventClicked[i].addEventListener("click", (event) => {
        console.log(event.target);
        isClicked = true;
        if(isClicked === true) {    
            document.getElementById(i).style.backgroundColor = "red";

        }
    })
}
