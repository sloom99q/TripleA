import { ClientsSection } from '@/pages/Home/ClientsSection';
// @ts-ignore
import Sahara from '@/assets/imgs/Sahara.webp';
// @ts-ignore
import Health from '@/assets/imgs/Health.webp';
// @ts-ignore
import Wood from '@/assets/imgs/Wood.webp';
// @ts-ignore
import Meraas from '@/assets/imgs/Meraas.svg';
// @ts-ignore
import Dhofar from '@/assets/imgs/Dhofar.png';
// @ts-ignore
import Westford from '@/assets/imgs/WestFord.png';

export const ClientsData = [
  {
    id: '1',
    logo: Dhofar,
    alt: 'Dhofar global',
  },
  {
    id: '2',
    logo: Wood,
    alt: 'Wood',
  },
  {   
    id: '3',
    logo: Meraas,
    alt: 'Meraas',
  },
  {
    id: '4',
    logo: Westford,
    alt: 'Westford university College',
  },
  {
    id: '5',
    logo: Health,
    alt: 'Sahara health care city',
  },
  {
    id: '6',
    logo: Sahara,
    alt: 'Sahara Mall',
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
