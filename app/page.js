import { VideoComponent } from './ui/videoComponent';
import { AboutUs } from './ui/aboutUs';
import { CardImage } from './ui/cardImage';

export default function Home() {
  return (
    <main>
      <VideoComponent />
      <AboutUs />
      <CardImage />
    </main>
  );
}
