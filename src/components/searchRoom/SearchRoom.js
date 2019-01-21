import React from 'react';

const SearchRoom = ({ filterRooms, filterStr }) => {
  return (
    <input
      type="text"
      id="searchInput"
      className="searchInput toggleDisplayNone"
      placeholder="Пошук кімнати ..."
      value={filterStr}
      onChange={e => filterRooms(e.target.value)}
    />
  );
};

export default SearchRoom;
