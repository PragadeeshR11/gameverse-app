export function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[linear-gradient(135deg,#100410,#100410,#100410,#0c0618)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
      <div className="relative z-10"> {children} </div>
    </div>
  );
}

export function ExplrLayout({ children }) {
  return (
    <div className="absolute inset-0 -z-10 m-6 rounded-4xl bg-[linear-gradient(135deg,#160516,#1d071c,#2a0a28)] ">
      {children}
    </div>
  );
}

//bg-[linear-gradient(135deg,#010102,#040308,#100410,#0c0618)]
