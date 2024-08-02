import React from 'react';
import Lawyers from './pages/Lawyers';

const dummyLawyers = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Expert in corporate law with over 10 years of experience.',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'Specializes in family law and divorce settlements.',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Robert Brown',
    description: 'Criminal defense lawyer known for high-profile cases.',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Emily White',
    description: 'Experienced in real estate law and property disputes.',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Michael Johnson',
    description: 'Specializes in intellectual property and patent law.',
    image_url: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Elizabeth Davis',
    description: 'Expert in employment law and workplace disputes.',
    image_url: 'https://via.placeholder.com/150',
  }
];

function App() {
  return (
    <>
      <Lawyers lawyers={dummyLawyers} />
    </>
  );
}

export default App;
