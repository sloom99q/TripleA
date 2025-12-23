import { ClientsSection } from '@/components/ClientsSection';
import Sahara from '@/assets/imgs/Sahara.png';
import Health from '@/assets/imgs/Health.png';
import Wood from '@/assets/imgs/Wood.png';
import Westport from '@/assets/imgs/Westport.png';

export const ClientsData = [
  {
    id: '1',
    logo: 'https://via.placeholder.com/150?text=Brand+One',
    alt: 'Brand One',
  },
  {
    id: '2',
    logo: Wood,
    alt: 'Wood.',
  },
  {
    id: '3',
    logo: Sahara,
    alt: 'Sahara',
  },
  {
    id: '4',
    logo: Westport,
    alt: 'Westport college',
  },
  {
    id: '5',
    logo: Health,
    alt: 'Sahara health care city',
  },
  {
    id: '6',
    logo: 'https://via.placeholder.com/150?text=Orange',
    alt: 'Orange Brand',
  },
];

// export default function Clients() {
//   return (
//     <ClientsSection
//       title="Our Clients"
//       description="We are proud to be recognized for our dedication to excellence in design. Our work has been featured in many publications and honored with a variety of awards. Here are a few brands we worked with:"
//       clients={clientData}
//     />
//   );
// }
