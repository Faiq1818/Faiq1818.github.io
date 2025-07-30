import BottomIcon from './bottomIcon';
import MiddleBar from './middleBar';
import TopSection from './topSection';

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#000000] p-6" style={{ border: "30px solid #000000", boxShadow: "inset 0 0 0 0.2px #ffffff"}}>
          <TopSection/>
          <MiddleBar/>
          <BottomIcon/>
      </div>
    </>
  )
}
