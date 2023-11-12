import { VideoInner } from './ui/videoInner';
import { AboutUs } from './ui/AboutUs';
import { CardImage } from './ui/cardImage';
// import { useRouter } from 'next/navigation';
// import en from '../public/locale/en';
// import es from '../public/locale/es';

export default function Home() {
  //I18 translate
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === 'en' ? es : en;

  return (
    <main>
      <VideoInner />
      <AboutUs />
      <CardImage />
    </main>
  );
}
