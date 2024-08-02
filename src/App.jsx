import React from 'react';
import Lawyers from './pages/Lawyers';

const dummyLawyers = [
  {
    id: 1,
    name: "John Doe",
    experience: 10,
    rate_per_hour: 250,
    specialization: "Criminal Law",
    image_url: "https://via.placeholder.com/150",
    description: "John Doe is an experienced criminal lawyer with a proven track record in defending clients in complex criminal cases. His expertise covers a wide range of criminal law areas including fraud, assault, and drug offenses."
  },
  {
    id: 2,
    name: "Jane Smith",
    experience: 8,
    rate_per_hour: 200,
    specialization: "Family Law",
    image_url: "https://via.placeholder.com/150",
    description: "Jane Smith is a compassionate family lawyer dedicated to helping clients navigate through family legal issues such as divorce, child custody, and adoption. She is known for her empathetic approach and effective advocacy."
  },
  {
    id: 3,
    name: "Michael Johnson",
    experience: 15,
    rate_per_hour: 300,
    specialization: "Corporate Law",
    image_url: "https://via.placeholder.com/150",
    description: "Michael Johnson is a seasoned corporate lawyer specializing in mergers and acquisitions, corporate governance, and compliance. His extensive experience with large corporations makes him a trusted advisor for business legal matters."
  },
  {
    id: 4,
    name: "Sarah Williams",
    experience: 12,
    rate_per_hour: 220,
    specialization: "Intellectual Property Law",
    image_url: "https://via.placeholder.com/150",
    description: "Sarah Williams is an intellectual property lawyer with over a decade of experience in protecting clients' intellectual property rights. She has handled numerous patent, trademark, and copyright cases."
  },
  {
    id: 5,
    name: "David Brown",
    experience: 9,
    rate_per_hour: 180,
    specialization: "Employment Law",
    image_url: "https://via.placeholder.com/150",
    description: "David Brown specializes in employment law, offering expert legal advice on employment contracts, workplace disputes, and employee rights. He is known for his strategic approach and client-focused service."
  },
  {
    id: 6,
    name: "Emily Davis",
    experience: 7,
    rate_per_hour: 210,
    specialization: "Immigration Law",
    image_url: "https://via.placeholder.com/150",
    description: "Emily Davis is a dedicated immigration lawyer assisting clients with visas, green cards, and citizenship applications. She has a strong reputation for her thoroughness and successful case outcomes."
  },
  {
    id: 7,
    name: "Christopher Martinez",
    experience: 14,
    rate_per_hour: 260,
    specialization: "Tax Law",
    image_url: "https://via.placeholder.com/150",
    description: "Christopher Martinez has extensive experience in tax law, providing clients with guidance on tax planning, compliance, and litigation. He is recognized for his analytical skills and comprehensive knowledge of tax regulations."
  },
  {
    id: 8,
    name: "Jessica Garcia",
    experience: 11,
    rate_per_hour: 230,
    specialization: "Environmental Law",
    image_url: "https://via.placeholder.com/150",
    description: "Jessica Garcia is an environmental lawyer committed to helping clients navigate environmental regulations and compliance. Her expertise includes environmental litigation, policy, and conservation issues."
  },
  {
    id: 9,
    name: "Daniel Rodriguez",
    experience: 13,
    rate_per_hour: 270,
    specialization: "Real Estate Law",
    image_url: "https://via.placeholder.com/150",
    description: "Daniel Rodriguez specializes in real estate law, offering legal services in property transactions, land use, and real estate development. He is known for his meticulous attention to detail and client satisfaction."
  },
  {
    id: 10,
    name: "Sophia Wilson",
    experience: 6,
    rate_per_hour: 190,
    specialization: "Personal Injury Law",
    image_url: "https://via.placeholder.com/150",
    description: "Sophia Wilson is a personal injury lawyer who passionately represents clients in injury claims, ensuring they receive fair compensation. Her areas of expertise include car accidents, medical malpractice, and workplace injuries."
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
