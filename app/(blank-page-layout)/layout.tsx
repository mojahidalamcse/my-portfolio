import { Header } from "@/components/shared/header";

const BlankPagelayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default BlankPagelayout;
