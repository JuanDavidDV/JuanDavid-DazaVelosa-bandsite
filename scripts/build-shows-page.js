import BandSiteApi from './band-site-api.js';

const shows = document.getElementById("shows");

//Creates the 2 main containers for Shows Tickets section
let showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");
shows.appendChild(showsContainer);

let showsContainerDetails = document.createElement("div");
showsContainerDetails.classList.add("shows__container-details");
shows.appendChild(showsContainerDetails);

//Creates elements for title, containers and labels
let showsSubContainer = document.createElement("div");
showsSubContainer.classList.add("shows__container__subcontainer");
showsContainer.appendChild(showsSubContainer);

let showsContainerTop = document.createElement("div");
showsContainerTop.classList.add("shows__container__subcontainer--top");
showsSubContainer.appendChild(showsContainerTop);

const showsTitle = document.createElement("h2");
showsTitle.classList.add("shows__container__subcontainer__title");
showsTitle.innerText = "Shows";
showsContainerTop.appendChild(showsTitle);

const showsLabelTabletContainer = document.createElement("div");
showsLabelTabletContainer.classList.add("shows__container-details__label-box");
showsContainerDetails.appendChild(showsLabelTabletContainer);

//Creates an array to store labels
const labels = ["DATE", "VENUE", "LOCATION"];

//Generates labels and creates an element to everyone of them for tablet and desktop breakpoints
for(let i = 0; i < labels.length; i++) {
    const showsLabels = document.createElement("p");
    showsLabels.classList.add("shows__container-details__label-box--labels");
    showsLabels.innerText = labels[i];
    showsLabelTabletContainer.appendChild(showsLabels);
}

const showLocation = "San Francisco, CA";

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

//Function created for the table that displays the shows
const showTickets = ( {date, place, location} ) => {
    let showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container-details__subcontainer");
    showsContainerDetails.appendChild(showsContainer);
    
    let showsSubContainer = document.createElement("div");
    showsSubContainer.classList.add("shows__container-details__subcontainer__box");
    showsContainer.appendChild(showsSubContainer);

    const showsWrapper = document.createElement("div");
    showsWrapper.classList.add("shows__container-details__subcontainer__box__wrapper");
    showsSubContainer.appendChild(showsWrapper);

    let showsWrapperDateLabel = document.createElement("p");
    showsWrapperDateLabel.classList.add("shows__container-details__subcontainer__box__wrapper__label");
    showsWrapperDateLabel.innerText = "DATE";
    showsWrapper.appendChild(showsWrapperDateLabel);

    let showsWrapperDateValue = document.createElement("h3");
    showsWrapperDateValue.classList.add("shows__container-details__subcontainer__box__wrapper__value--date");
    showsWrapperDateValue.innerText = date;
    showsWrapper.appendChild(showsWrapperDateValue);

    let showsWrapperVenueLabel = document.createElement("p");
    showsWrapperVenueLabel.classList.add("shows__container-details__subcontainer__box__wrapper__label");
    showsWrapperVenueLabel.innerText = "VENUE";
    showsWrapper.appendChild(showsWrapperVenueLabel);

    let showsWrapperVenueValue = document.createElement("p");
    showsWrapperVenueValue.classList.add("shows__container-details__subcontainer__box__wrapper__value");
    showsWrapperVenueValue.innerText = place;
    showsWrapper.appendChild(showsWrapperVenueValue);

    let showsWrapperLocationLabel = document.createElement("p");
    showsWrapperLocationLabel.classList.add("shows__container-details__subcontainer__box__wrapper__label");
    showsWrapperLocationLabel.innerText = "LOCATION";
    showsWrapper.appendChild(showsWrapperLocationLabel);

    const showsWrapperLocationValue = document.createElement("p");
    showsWrapperLocationValue.classList.add("shows__container-details__subcontainer__box__wrapper__value");
    showsWrapperLocationValue.innerText = location;
    showsWrapper.appendChild(showsWrapperLocationValue);

    const showsWrapperButton = document.createElement("button");
    showsWrapperButton.classList.add("shows__container-details__subcontainer__box__wrapper__button");
    showsWrapperButton.innerText = "BUY TICKETS";
    showsWrapper.appendChild(showsWrapperButton);

};

const displayCurrentShows = async () => {
    const defaultShows = new BandSiteApi("e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");
    const shows = await defaultShows.getShows();
    console.log(shows);
    shows.forEach((ticketsDisplayed) => showTickets(ticketsDisplayed));
};

displayCurrentShows();

let eventClicked = document.querySelectorAll(".shows__container-details__subcontainer");

eventClicked.forEach(showAddClickListener => {
    showAddClickListener.addEventListener("click", () => {
        document.querySelector(".shows__container-details__subcontainer--active")?.classList.remove("shows__container-details__subcontainer--active");
        showAddClickListener.classList.add("shows__container-details__subcontainer--active");
    });
});