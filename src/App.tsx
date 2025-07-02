import React, { Suspense } from "react";
import MainRoutes from "./pages/index";
import Loading from "./ustilist/index";
const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <MainRoutes />
      </Suspense>
    </div>
  );
};

export default React.memo(App);
