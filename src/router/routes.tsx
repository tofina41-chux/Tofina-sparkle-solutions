import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/Services/ServiceDetail"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const BeforeAfter = lazy(() => import("@/pages/BeforeAfter"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const RequestQuote = lazy(() => import("@/pages/RequestQuote"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/Blog/BlogPost"));
const Careers = lazy(() => import("@/pages/Careers"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:slug", element: <ServiceDetail /> },
      { path: "gallery", element: <Gallery /> },
      { path: "before-after", element: <BeforeAfter /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "faq", element: <FAQ /> },
      { path: "request-quote", element: <RequestQuote /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "careers", element: <Careers /> },
      { path: "privacy-policy", element: <Privacy /> },
      { path: "terms-and-conditions", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
