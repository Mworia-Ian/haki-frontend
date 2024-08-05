import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../css/Lawyers.css';

const LawyersSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
 
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3 search">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 custom-search-input"
        value={query}
        onChange={handleInputChange}
      />
      <Button variant="outline-success" type="submit" className="custom-search-button">Search</Button>
    </Form>
  );
};

export default LawyersSearch;
