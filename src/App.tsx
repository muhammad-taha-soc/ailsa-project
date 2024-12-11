import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Extract from './pages/Extract';
import Ideator from './pages/Ideator';
import Review from './pages/Review';
import Research from './pages/Research';
import Editor from './pages/Editor';
import Inputs from './pages/Inputs';
import Projects from './pages/Projects';
import Drafts from './pages/Drafts';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          path="/extract"
          element={
            <>
              <PageTitle title="Extract" />
              <Extract />
            </>
          }
        />
        <Route
          path="/ideator"
          element={
            <>
              <PageTitle title="Ideator" />
              <Ideator />
            </>
          }
        />
        <Route
          path="/editor"
          element={
            <>
              <PageTitle title="Editor" />
              <Editor />
            </>
          }
        />
        <Route
          path="/review"
          element={
            <>
              <PageTitle title="Review" />
              <Review />
            </>
          }
        />
        <Route
          path="/research"
          element={
            <>
              <PageTitle title="Research" />
              <Research />
            </>
          }
        />
        <Route
          path="/inputs"
          element={
            <>
              <PageTitle title="Inputs" />
              <Inputs />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <PageTitle title="Projects" />
              <Projects />
            </>
          }
        />
        <Route
          path="/drafts"
          element={
            <>
              <PageTitle title="Drafts" />
              <Drafts />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
