import Navbar from '../components/Navbar';
import '../styles/global.css'

export const metadata = {
  title: "Writing Fortress",
  description: "Your site description",
  icons: {
    icon: "/icons/wf-favicon.ico", // or /your-icon.png, if using png/svg
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
