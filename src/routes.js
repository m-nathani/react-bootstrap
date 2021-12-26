import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { CommunicationSkeleton } from 'components';
import Communication from 'pages/Communication';
import useBootStrap from 'hooks/useBootstrap';
import i18n from 'utils/i18n';
import { ROUTES } from 'constants/routes';

const Routes = () => {
  useBootStrap();

  return (
    <Suspense fallback={<CommunicationSkeleton />}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Switch>
            <Route path={ROUTES.HOME} element={<Communication />} />
          </Switch>
        </BrowserRouter>
      </I18nextProvider>
    </Suspense>
  );
};

export default Routes;
