import { Header } from './ui/header';
import { VideoComponent } from './ui/videoComponent';
import { About } from './ui/about';
import { CardImage } from './ui/cardImage';

export default function Home() {
  return (
    <main>
      <Header showGlobalHeader={true} />
      <VideoComponent />
      <About />
      <CardImage />
    </main>
  );
}
