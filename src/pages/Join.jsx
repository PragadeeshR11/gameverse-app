import { SubLayout } from '../UI/Layouts.jsx';

export default function Join() {
  return (
    <div className=" max-w-7xl px-6 py-12 overflow-hidden">
      <a className="text-muted ml-14 cursor-pointer hover:text-amber-50 transition-all duration-300 ease-out">
        &larr; Back to GameVerse{' '}
      </a>
      <div className="ml-64">
        <SubLayout>
          <form>
            <h2 className="sec-head mt-2">Just Few More Steps</h2>
            <p className="sub-text">Complete your membership and unlock Premium Experience</p>
            <div className="mt-10">
              <div className="form-data">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  className="form-input"
                  placeholder="enter your name"
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="enter your email"
                  required
                />
              </div>
              <div className="form-data">
                <label htmlFor="plan">Selected Plan</label>
                <input id="plan" type="" className="form-input" required />
              </div>
              <div className="form-data">
                <label htmlFor="payment">Select a Payment Method</label>
                <div className=" flex gap-8 mt-3">
                  <div className="flex gap-3">
                    <input type="radio" name="payment" />
                    <span className="text-gray-300">UPI</span>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="radio" name="payment" />
                    <span className="text-gray-300">Credit Card</span>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="radio" name="payment" />
                    <span className="text-gray-300">Debit Card</span>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="radio" name="payment" />
                    <span className="text-gray-300">Paypal</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end my-2 mr-8">
              <button className=" actionBtn bg-amber-50 text-black inline-block px-9 py-3  ">
                Dive-In
              </button>
            </div>
          </form>
        </SubLayout>
      </div>
    </div>
  );
}

{
  /* <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
           {emailInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div> */
}
