import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div
      className="
        flex 
        w-full 
        h-full
      "
    >
      <div className="w-72">
        <Sidebar />
      </div>
      <div
        className="
          w-full 
          px-10
        "
      >
        <Header />
      </div>
    </div>
  );
}
