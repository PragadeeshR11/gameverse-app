import { useActionState, useEffect } from 'react';
import { SubLayout } from '../UI/Layouts.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Join() {
  const loc = useLocation();
  const navigate = useNavigate();

  const selectedPlan = loc.state?.plan || 'Plus';

  async function submitAction(prevState, formData) {
    return formData.get('username');
  }

  const [state, formAction, isPending] = useActionState(submitAction, '');

  useEffect(() => {
    if (state) {
      navigate('/subscribed', {
        state: {
          username: state,
        },
      });
    }
  }, [state]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <a
        onClick={() => navigate(-1)}
        className="text-muted ml-0 md:ml-14 cursor-pointer hover:text-amber-50 transition-all duration-300 ease-out"
      >
        &larr; Back to GameVerse
      </a>
      <div className=" max-w-5xl mx-auto">
        <SubLayout>
          <form action={formAction}>
            <h2 className="sec-head mt-2">Just Few More Steps</h2>
            <p className="sub-text">Complete your membership and unlock Premium Experience</p>
            <div className="mt-10">
              <div className="form-data ">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="form-input"
                  placeholder="enter your name"
                  maxLength={20}
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="enter your email"
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="plan">Selected Plan</label>
                <input
                  id="plan"
                  className="form-input disabled:opacity-80"
                  value={selectedPlan}
                  disabled
                />
              </div>
              <div className="form-data">
                <label htmlFor="payment">Select a Payment Method</label>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 lg:gap-8 mt-3">
                  <div className="flex gap-1.5">
                    <input type="radio" name="payment" value="upi" required />
                    <span className="text-gray-300">UPI</span>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="radio" name="payment" value="creditcard" required />
                    <span className="text-gray-300">Credit Card</span>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="radio" name="payment" value="debitcard" required />
                    <span className="text-gray-300">Debit Card</span>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="radio" name="payment" value="paypal" required />
                    <span className="text-gray-300">Paypal</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end my-4 md:mr-8">
              <button
                type="submit"
                className=" actionBtn w-full md:w-auto bg-amber-50 text-black px-9 py-3"
              >
                {isPending ? 'Diving-In' : 'Dive-In'}
              </button>
            </div>
          </form>
        </SubLayout>
      </div>
    </div>
  );
}
