import { useLocation, useNavigate } from 'react-router-dom';
import { SubLayout } from '../UI/Layouts';

export default function Subscribed() {
  const loc = useLocation();
  const navigate = useNavigate();
  const userName = loc.state?.username.toUpperCase() || '';

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center ">
      <div className="max-w-3xl">
        <SubLayout>
          <div className="p-6">
            <h2 className="audiowide text-3xl font-normal mb-3">
              Welcome To The World Of Gameverse, {userName}
            </h2>
            <p className="text-muted text-sm mb-14">
              Your premium membership is now active.
              <br /> Explore worlds, stories, and adventures across every platform.
            </p>
            <div className="flex justify-end my-2 mr-8">
              <button
                className="actionBtn bg-amber-50 text-black px-6 py-3"
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
