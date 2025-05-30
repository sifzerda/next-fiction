// src/components/Layout.js
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />

      <div className="flex flex-col sm:flex-row pt-28">
        <aside className="w-full sm:w-56 bg-gray-100 dark:bg-gray-900 p-6">
          <Sidebar />
        </aside>

        <main className="flex-1 p-4 sm:px-6 flex flex-col gap-8 items-center sm:items-start pb-28">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;