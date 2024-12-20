import Sidebar from "./Sidebar";
import Header from "./Header";
import ContentTabs from "./ContentTabs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ContentTabs />
        <main className="p-4 flex-1 bg-light-gray">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
