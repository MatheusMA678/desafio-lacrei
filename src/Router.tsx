import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { PersonalUser } from "./pages/PersonalUser";
import { Professional } from "./pages/Professional";

export function Router() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pessoa-usuaria" element={<PersonalUser />} />
          <Route path="/profissional" element={<Professional />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
