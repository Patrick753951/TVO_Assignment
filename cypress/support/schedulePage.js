export default url => ({
    elements: {
        scheduleText: "Schedule",
        scheduleButton: "span>div",
        dayButton: "button>span",
    },

    navigate() {
        cy.visit(url);
    },

    gotoSchedulePage(){
        cy.contains(this.elements.scheduleButton, this.elements.scheduleText).parents().eq(3).click();
    },

    getWeek(){
        let date = new Date();
        let week = date.getDay();

        switch (week){
            case 0:
                return "Sun";
                break;
            case 1:
                return "Mon";
                break;
            case 2:
                return "Tue";
                break;
            case 3:
                return "Wed";
                break;
            case 4:
                return "Thu";
                break;
            case 5:
                return "Fri";
                break;
            case 6:
                return "Sat";
                break;
        }
    },

    getDate(){
        let date = new Date();
        let Month = date.getMonth();
        let day = date.getDate();

        let MonthString = 0;

        switch (Month){
            case 0:
                MonthString = "Jan";
                break;
            case 1:
                MonthString = "Feb";
                break;
            case 2:
                MonthString = "Mar";
                break;
            case 3:
                MonthString = "Apr";
                break;
            case 4:
                MonthString = "May";
                break;
            case 5:
                MonthString = "Jun";
                break;
            case 6:
                MonthString = "Jul";
                break;
            case 7:
                MonthString = "Aug";
                break;
            case 8:
                MonthString = "Sep";
                break;
            case 9:
                MonthString = "Oct";
                break;
            case 10:
                MonthString = "Nov";
                break;
            case 11:
                MonthString = "Dec";
                break;
        }

        return MonthString + " " + (day);
    }
})