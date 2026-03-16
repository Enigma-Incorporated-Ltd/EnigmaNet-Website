import MainLayout from "@/app/MainLayout";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AllRoutes } from "./Routes";

const CmsViewer = lazy(() => import("@/app/cms"));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* ── CMS Project Viewer – no main-site layout ── */}
        <Route
          path="/cms"
          element={
            <Suspense fallback={null}>
              <CmsViewer />
            </Suspense>
          }
        />

        {/* ── All other routes wrapped in MainLayout ── */}
        {AllRoutes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
      </Routes >
    </>
  );
};

export default AppRoutes;
