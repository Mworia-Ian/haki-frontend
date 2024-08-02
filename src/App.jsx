import React from 'react';
import Lawyers from './pages/Lawyers';

const dummyLawyers = [
  {
    id: 1,
    name: "John Doe",
    experience: 10,
    rate_per_hour: 250,
    specialization: "Criminal Law",
    image_url: "https://media.istockphoto.com/id/1396456823/photo/african-american-male-lawyer-opens-a-new-firm-in-the-city.jpg?s=612x612&w=0&k=20&c=T-2Xfc2Q8sNxUej66pfX1P4iuyN3viiiFQI3rmfqXSI="
  },
  {
    id: 2,
    name: "Jane Smith",
    experience: 8,
    rate_per_hour: 200,
    specialization: "Family Law",
    image_url: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Michael Johnson",
    experience: 15,
    rate_per_hour: 300,
    specialization: "Corporate Law",
    image_url: "https://via.placeholder.com/150"
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
