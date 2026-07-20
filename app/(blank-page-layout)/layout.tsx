import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

const BlankPageLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default BlankPageLayout;
