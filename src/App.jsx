import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientHomepage from './components/ClientHomepage';
import Lawyers from './pages/Lawyers';
import LawyerDetails from './components/LawyersDetails';

const dummyLawyers = [
  {
    id: 1,
    name: "John Doe",
    experience: 10,
    specialization: "Criminal Law",
    rate_per_hour: "5,000",
    image_url: "https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA=",
    description: "John Doe is an experienced criminal lawyer with a proven track record in defending clients in complex criminal cases. His expertise covers a wide range of criminal law areas including fraud, assault, and drug offenses."
  },
  {
    id: 2,
    name: "Jane Smith",
    experience: 8,
    specialization: "Family Law",
    rate_per_hour: "3,000",
    image_url: "https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",
    description: "Jane Smith is a compassionate family lawyer dedicated to helping clients navigate through family legal issues such as divorce, child custody, and adoption. She is known for her empathetic approach and effective advocacy."
  },
  {
    id: 3,
    name: "Michael Johnson",
    experience: 15,
    specialization: "Corporate Law",
    rate_per_hour: "4,000",
    image_url: "https://media.istockphoto.com/id/1182967311/photo/confident-smiling-young-african-businessman-looking-at-camera-in-office.jpg?s=612x612&w=0&k=20&c=OIKWgJqGRsU12EhryxZOpqKQ2eBd_buxLfqYHhh42_4=",
    description: "Michael Johnson is a seasoned corporate lawyer specializing in mergers and acquisitions, corporate governance, and compliance. His extensive experience with large corporations makes him a trusted advisor for business legal matters."
  },
  {
    id: 4,
    name: "Sarah Williams",
    experience: 12,
    specialization: "Intellectual Property Law",
    rate_per_hour: "5,000",
    image_url: "https://media.istockphoto.com/id/1181860679/photo/studio-headshot-of-a-hispanic-woman-wearing-a-turtle-neck-pullover.jpg?s=612x612&w=0&k=20&c=VpNhmeN4Qj_YVghjCiq8_sDt6TNyJr_JSSUDBgi4txU=",
    description: "Sarah Williams is an intellectual property lawyer with over a decade of experience in protecting clients' intellectual property rights. She has handled numerous patent, trademark, and copyright cases."
  },
  {
    id: 5,
    name: "David Brown",
    experience: 9,
    specialization: "Employment Law",
    rate_per_hour: "4,000",
    image_url: "https://media.istockphoto.com/id/1184187261/photo/portrait-of-cheerful-bearded-black-man-over-yellow-background.jpg?s=612x612&w=0&k=20&c=me77y_a3sfKKOauLJpMMQo3wctCyMTf9_PtQT6YLhN4=",
    description: "David Brown specializes in employment law, offering expert legal advice on employment contracts, workplace disputes, and employee rights. He is known for his strategic approach and client-focused service."
  },
  {
    id: 6,
    name: "Emily Davis",
    experience: 7,
    specialization: "Immigration Law",
    rate_per_hour: "3,000",
    image_url: "https://media.istockphoto.com/id/1299077582/photo/positivity-puts-you-in-a-position-of-power.jpg?s=612x612&w=0&k=20&c=baDuyrwRTscUZzyAqV44hnCq7d6tXUqwf26lJTcAE0A=",
    description: "Emily Davis is a dedicated immigration lawyer assisting clients with visas, green cards, and citizenship applications. She has a strong reputation for her thoroughness and successful case outcomes."
  },
  {
    id: 7,
    name: "Christopher Martinez",
    experience: 14,
    specialization: "Tax Law",
    rate_per_hour: "5,000",
    image_url: "https://media.istockphoto.com/id/1262964438/photo/success-happens-the-moment-you-believe-it-will.jpg?s=612x612&w=0&k=20&c=tpjbR4aaaiB43sneEWgatyFIQOmN3E-3nB5CBE5Idyg=",
    description: "Christopher Martinez has extensive experience in tax law, providing clients with guidance on tax planning, compliance, and litigation. He is recognized for his analytical skills and comprehensive knowledge of tax regulations."
  },
  {
    id: 8,
    name: "Jessica Garcia",
    experience: 11,
    specialization: "Environmental Law",
    rate_per_hour: "4,000",
    image_url: "https://media.istockphoto.com/id/1278139568/photo/studio-portrait-of-20-year-old-woman.jpg?s=612x612&w=0&k=20&c=FSEdX6EGKrjbCvOJk9idiYZJoSErA9bwizHEkW86A3c=",
    description: "Jessica Garcia is an environmental lawyer committed to helping clients navigate environmental regulations and compliance. Her expertise includes environmental litigation, policy, and conservation issues."
  },
  {
    id: 9,
    name: "Daniel Rodriguez",
    experience: 13,
    specialization: "Real Estate Law",
    rate_per_hour: "5,000",
    image_url: "https://media.istockphoto.com/id/1152603187/photo/african-mature-man-with-spectacles.jpg?s=612x612&w=0&k=20&c=f2SytlutqLu8XGBdjYVlvSZEVHthQKAGjBVOWs8tiv8=",
    description: "Daniel Rodriguez specializes in real estate law, offering legal services in property transactions, land use, and real estate development. He is known for his meticulous attention to detail and client satisfaction."
  },
  {
    id: 10,
    name: "Sophia Wilson",
    experience: 6,
    specialization: "Personal Injury Law",
    rate_per_hour: "3,000",
    image_url: "https://media.istockphoto.com/id/1196391449/photo/portrait-of-african-woman.jpg?s=612x612&w=0&k=20&c=b-hwtJGyg5Y-hwG-9id9D3hb71TmaqyDlfU-Ps3GA2s=",
    description: "Sophia Wilson is a personal injury lawyer who passionately represents clients in injury claims, ensuring they receive fair compensation. Her areas of expertise include car accidents, medical malpractice, and workplace injuries."
  }
];


function App() {
  return (
   
      <Routes>
       <Route path="/" element={<ClientHomepage />} />
       <Route path="/lawyers" element={<Lawyers lawyers={dummyLawyers} />} />
       <Route path="/lawyers/:id" element={<LawyerDetails />} />
      </Routes>
   
  );
}

export default App;
