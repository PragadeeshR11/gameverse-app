export function Layout({ children }) {
  return (
    <div className="app-bg">
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function ExplrLayout({ children }) {
  return (
    <div className="absolute inset-0 -z-10 m-6 rounded-4xl bg-[linear-gradient(135deg,#0b0a12,#2a0a28)]">
      {children}
    </div>
  );
}
