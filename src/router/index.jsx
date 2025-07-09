import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/Error/ErrorBoundary";
import { routes } from "./router";
import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

const finalRoutes = routes.map((route) => ({
    ...route,
    element:
        route.layout === "landing" && (
        <ErrorBoundary>
            <div className="min-h-screen w-full overflow-hidden">
                <div className="flex flex-col min-h-screen relative">
                    <header className="relative z-50">
                        <Navbar />
                    </header>
                    <main className="flex-grow relative">
                        {route.element}
                    </main>
                    <footer className="relative z-10">
                        <Footer />
                    </footer>
                </div>
            </div>
        </ErrorBoundary>
        ) || (
            route.element
        ),
}));

const router = createBrowserRouter(finalRoutes);
export default router;