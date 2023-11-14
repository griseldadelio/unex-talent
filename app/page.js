import { VideoComponent } from './ui/videoComponent';
import { About } from './ui/about';
import { CardImage } from './ui/cardImage';

export default function Home() {
  return (
    <main>
      <VideoComponent />
      <About />
      <CardImage />
    </main>
  );
}
