import "./global.css"; // Import global styles
import Layout from "../components/Layout"; // Import the layout component

export const metadata = {
  title: "Dashboard",
  description: "Modern Dashboard Application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
