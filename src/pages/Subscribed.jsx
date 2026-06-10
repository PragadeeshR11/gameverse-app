import { useLocation, useNavigate } from 'react-router-dom';
import { SubLayout } from '../UI/Layouts';

export default function Subscribed() {
  const loc = useLocation();
  const navigate = useNavigate();
  const userName = loc.state?.username?.toUpperCase() || 'PLAYER';

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex items-center justify-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-3xl">
        <SubLayout>
          <div className="p-6">
            <h2 className="audiowide text-xl sm:text-2xl md:text-3xl font-normal mb-3 break-words">
              Welcome To The World Of Gameverse, {userName}
            </h2>
            <p className="text-muted text-sm mb-10 md:mb-14">
              Your premium membership is now active.
              <br /> Explore worlds, stories, and adventures across every platform.
            </p>
            <div className="flex justify-center md:justify-end mt-6 lg:mr-4">
              <button
                className="actionBtn w-full md:w-auto bg-amber-50 text-black px-6 py-3"
                onClick={() => navigate('/')}
              >
                Dive into Gameverse
              </button>
            </div>
          </div>
        </SubLayout>
      </div>
    </div>
  );
}
