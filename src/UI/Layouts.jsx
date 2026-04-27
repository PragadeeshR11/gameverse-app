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
    <div className="absolute inset-0 -z-10 m-6 rounded-4xl bg-[linear-gradient(135deg,#160516,#1d071c)] ">
      {children}
    </div>
  );
}

export function SubLayout({ children }) {
  return (
    <div className="bg-[linear-gradient(135deg,#160516,#1d071c,#2a0a28)] mt-4 mx-10 p-6 rounded-4xl">
      {children}
    </div>
  );
}

export function PlusCard({ children }) {
  return (
    <div
      className="plus w-[280px] h-[480px] rounded-xl p-4 border border-white/15 backdrop-blur-xl tranform-transition duration-300 hover:scale-[1.02]
      bg-[linear-gradient(135deg,rgba(58,15,52,0.55),rgba(122,31,79,0.35))] bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_60%)]"
    >
      {children}
    </div>
  );
}

export function UltimateCard({ children }) {
  return (
    <div
      className="ultimate w-[320px] h-[540px] rounded-xl p-8 border border-[#7a1f4f]/60  backdrop-blur-xl tranform-transition duration-300 hover:scale-[1.02]
      bg-[linear-gradient(135deg,rgba(58,15,44,0.65),rgba(122,31,79,0.45))] bg-[radial-gradient(circle_at_25%_15%,rgba(122,31,79,0.6),transparent_60%)] 
      shadow-[0_0_50px_rgba(122,31,79,0.35)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]"
    >
      {children}
    </div>
  );
}

//bg-[linear-gradient(135deg,#010102,#040308,#100410,#0c0618)]
//bg-[linear-gradient(90deg,#d52d6e_0%,#b83285_50%,#8b2c9f_100%)]-pinkpurple gradient
