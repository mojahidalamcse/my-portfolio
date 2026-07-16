import { Header } from "@/components/shared/header";

const BlankPagelayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default BlankPagelayout;
