import MarketLoader from "./MarketLoader";

export default function LoadingScreen() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 20% 20%, rgba(108,92,231,0.18), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 80% 80%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <div className="relative">
        <MarketLoader />
      </div>
    </div>
  );
}
