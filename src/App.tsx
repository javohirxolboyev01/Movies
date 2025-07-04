import React, { Suspense } from "react";
import MainRoutes from "./pages/index";
import Loading from "./ustilist/index";
const App = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Suspense fallback={<Loading />}>
        <MainRoutes />
      </Suspense>
    </div>
  );
};

export default React.memo(App);
