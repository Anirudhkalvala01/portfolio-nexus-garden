import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center font-bold text-xl gradient-text">
                Portfolio
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-primary bg-secondary shadow-md"
                      : "text-foreground/60 hover:text-primary hover:bg-secondary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <footer className="border-t py-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;