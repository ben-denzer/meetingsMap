import * as React from 'react';
import Day from '../../types/Day';
import Filters from '../../types/Filters';
import { MapFilterBarWrapper } from './MapFilterBarStyles';

interface Props {
  filterChanged: (e: React.FormEvent<HTMLSelectElement>) => void;
  filters: Filters;
}

const MapFilterBar: React.SFC<Props> = (props: Props) => {
  const { filterChanged, filters } = props;
  let dayOptions: JSX.Element[] = [
    // prettier-ignore
    <option key="any" value={Day.Any}>Any Day</option>
  ];
  for (let i = 0; i < 7; i++) {
    dayOptions.push(
      <option key={Day[i]} value={i}>
        {Day[i]}
      </option>
    );
  }
  return (
    <MapFilterBarWrapper>
      <div className="dropdown">
        <select data-filter-id="dayOfWeek" value={filters.dayOfWeek} onChange={filterChanged}>
          {dayOptions}
        </select>
      </div>
    </MapFilterBarWrapper>
  );
};

export default MapFilterBar;
