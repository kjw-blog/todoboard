export default function Layout({ children }) {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <div className="bg-gradient-to-tl to-blue-100 from-blue-400  h-screen">
          {children}
        </div>
      </div>
    </>
  );
}
