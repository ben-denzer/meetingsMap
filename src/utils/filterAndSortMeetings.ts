import Day from "../types/Day";
import Filters from "../types/Filters";
import Meeting from "../types/Meeting";

function filterByDay(meetings: Meeting[], selectedDay: Day): Meeting[] {
  if (selectedDay === 7) {
    return meetings;
  }
  return meetings.filter(a => {
    console.log("a.day", a.day, "selectedDay", selectedDay, " = ", selectedDay === a.day);
    return Day[a.day] === Day[selectedDay];
  });
}

function filterAndSortMeetings(allMeetings: Meeting[], filters: Filters): Meeting[] {
  return filterByDay(allMeetings, filters.dayOfWeek);
}

export { filterByDay };
export default filterAndSortMeetings;
