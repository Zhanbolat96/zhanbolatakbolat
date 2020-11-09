import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Layout from "./modules/common/Layout";
import './App.css';

const MainPage = lazy(() => import('./modules/pages/MainPage'));
const AboutElUmiti = lazy(() => import('./modules/pages/AboutElUmiti'));
const AboutAcademy = lazy(() => import('./modules/pages/AboutAcademy'));
const Educators = lazy(() => import('./modules/pages/Educators'));
const Parents = lazy(() => import('./modules/pages/Parents'));
const Young = lazy(() => import('./modules/pages/Young'));

function App() {
  let location = useLocation();
  return (
    <>
      <Layout variant={location.pathname === '/'}>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route component={MainPage} exact path='/' />
            <Route component={AboutElUmiti} exact path='/about-project' />
            <Route component={AboutAcademy} exact path='/about-academy' />
            <Route component={Educators} exact path='/educators' />
            <Route component={Parents} exact path='/parents' />
            <Route component={Young} exact path='/young' />
          </Suspense>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
