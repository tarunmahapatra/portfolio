import LeftSidebar from '../components/LeftSidebar';
import Feed from '../components/Feed';
import RightSidebar from '../components/RightSidebar';

function Home() {
  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <LeftSidebar />
        </div>
        <div className="lg:col-span-6">
          <Feed />
        </div>
        <div className="lg:col-span-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
