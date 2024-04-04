import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Jobs from "./screen/Jobs";
import AddJob from "./screen/AddJob";
import JobProfile from "./screen/JobProfile";
import EditJob from "./screen/EditJob";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:id" element={<JobProfile />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="edit-job/:id" element={<EditJob />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
