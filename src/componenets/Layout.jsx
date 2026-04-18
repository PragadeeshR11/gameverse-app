export default function Layout({ children }) {
  return (
    <div className="app-bg">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
