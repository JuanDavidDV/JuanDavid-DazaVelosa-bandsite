const shows = document.getElementById("shows");

let showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");
shows.appendChild(showsContainer);

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
showsLabelTabletContainer.classList.add("shows__container__subcontainer__label__tablet-box");
showsSubContainer.appendChild(showsLabelTabletContainer);

const labels = ["DATE", "VENUE", "LOCATION"];

for(i = 0; i < labels.length; i++) {
    const showsLabels = document.createElement("p");
    showsLabels.classList.add("shows__container__subcontainer__label__tablet-box--labels");
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

const showTickets = (tickets) => {

    let showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container--tickets");
    shows.appendChild(showsContainer);
    
    let showsSubContainer = document.createElement("div");
    showsSubContainer.classList.add("shows__container__subcontainer--tickets");
    showsContainer.appendChild(showsSubContainer);

    const showsWrapper = document.createElement("div");
    showsWrapper.classList.add("shows__container__subcontainer__wrapper");
    showsSubContainer.appendChild(showsWrapper);

    let showsWrapperDateLabel = document.createElement("p");
    showsWrapperDateLabel.classList.add("shows__container__subcontainer__wrapper__label");
    showsWrapperDateLabel.innerText = "DATE";
    showsWrapper.appendChild(showsWrapperDateLabel);

    let showsWrapperDateValue = document.createElement("h3");
    showsWrapperDateValue.classList.add("shows__container__subcontainer__wrapper__value");
    showsWrapperDateValue.innerText = tickets.date;
    showsWrapper.appendChild(showsWrapperDateValue);

    let showsWrapperVenueLabel = document.createElement("p");
    showsWrapperVenueLabel.classList.add("shows__container__subcontainer__wrapper__label");
    showsWrapperVenueLabel.innerText = "VENUE";
    showsWrapper.appendChild(showsWrapperVenueLabel);

    let showsWrapperVenueValue = document.createElement("p");
    showsWrapperVenueValue.classList.add("shows__container__subcontainer__wrapper__value");
    showsWrapperVenueValue.innerText = tickets.venue;
    showsWrapper.appendChild(showsWrapperVenueValue);

    let showsWrapperLocationLabel = document.createElement("p");
    showsWrapperLocationLabel.classList.add("shows__container__subcontainer__wrapper__label");
    showsWrapperLocationLabel.innerText = "LOCATION";
    showsWrapper.appendChild(showsWrapperLocationLabel);

    const showsWrapperLocationValue = document.createElement("p");
    showsWrapperLocationValue.classList.add("shows__container__subcontainer__wrapper__value");
    showsWrapperLocationValue.innerText = tickets.location;
    showsWrapper.appendChild(showsWrapperLocationValue);

    const showsWrapperButton = document.createElement("button");
    showsWrapperButton.classList.add("shows__container__subcontainer__wrapper__button");
    showsWrapperButton.innerText = "BUY TICKETS";
    showsWrapper.appendChild(showsWrapperButton);

    createDividersMobile();
};

const displayCurrentShows = () => {
    showTicketsDetails.forEach((ticketsDisplayed) => showTickets(ticketsDisplayed));
};

const createDividersMobile = () => {
    let showsWrapperDivider = document.createElement("hr");
    showsWrapperDivider.classList.add("shows__divider");
    shows.appendChild(showsWrapperDivider);
    return showsWrapperDivider;
}

const createDividersTablet = () => {
    let showWrapperDivider = document.createElement("hr");
    showWrapperDivider.classList.add("shows__divider--tablet");
    showsSubContainer.appendChild(showWrapperDivider);
}

displayCurrentShows();

let eventClicked = document.querySelectorAll(".shows__container__subcontainer");

eventClicked.forEach(showAddClickListener => {
    showAddClickListener.addEventListener("click", () => {
        document.querySelector(".shows__container__subcontainer--active")?.classList.remove("shows__container__subcontainer--active");
        showAddClickListener.classList.add("shows__container__subcontainer--active");
    });
});