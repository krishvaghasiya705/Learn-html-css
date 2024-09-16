import React, { useState } from 'react';
import HTMLTagsTable from '../../components/Homecomponents';
import Csspagecompo from '../../components/Csspagecomponents';
import Homepagecontenttogglesection from '../../components/Homepagecontenttogglesection';

export default function Home() {
  const [activeToggle, setActiveToggle] = useState('html');
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleClick = (toggle) => {
    setActiveToggle(toggle);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Homepagecontenttogglesection
        activeToggle={activeToggle}
        handleToggleClick={handleToggleClick}
      />
      {activeToggle === 'html' && (
        <HTMLTagsTable
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      )}
      {activeToggle === 'css' && (
        <Csspagecompo searchQuery={searchQuery} />
      )}
    </>
  );
}