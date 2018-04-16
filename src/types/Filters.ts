import Day from './Day';

interface Filters {
  dayOfWeek: Day;
}

const mockFilters = {
  dayOfWeek: Day.Any
};

export { mockFilters };
export default Filters;
