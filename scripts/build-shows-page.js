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

//Generates labels and creates an element to their respective
for(let i = 0; i < labels.length; i++) {
    const showsLabels = document.createElement("p");
    showsLabels.classList.add("shows__container-details__label-box--labels");
    showsLabels.innerText = labels[i];
    showsLabelTabletContainer.appendChild(showsLabels);
}

//Function transforms API data timestamp to appropiate format
 const dateFormat = (timestamp) => {    
     const timeStampDate = new Date(timestamp);
     timeStampDate.setHours(0, 0, 0, 0);
     const dateWithoutTime = timeStampDate.toDateString();  //Removes hours and time
     return dateWithoutTime;

};

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
    showsWrapperDateValue.innerText = dateFormat(date);
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
    const defaultShows = new BandSiteApi("67b5c21e-c789-4b4f-8213-c3c8ff8da2f2");
    const shows = await defaultShows.getShows();
    shows.forEach((ticketsDisplayed) => showTickets(ticketsDisplayed));

    //selectedShows function invocked inside the async function to make it work 
    selectedShows();
    return shows;
};

const selectedShows = () => {
    let eventClicked = document.querySelectorAll(".shows__container-details__subcontainer");
    eventClicked.forEach(showAddClickListener => {
        showAddClickListener.addEventListener("click", () => {
            document.querySelector(".shows__container-details__subcontainer--active")?.classList.remove("shows__container-details__subcontainer--active");
            showAddClickListener.classList.add("shows__container-details__subcontainer--active");
        });
    });
};

displayCurrentShows();