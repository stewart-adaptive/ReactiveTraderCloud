import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { RouteWrapper } from 'rt-components'
import { OpenFinWindowFrame, OpenFinSubWindowFrame } from 'rt-platforms/openfin-platform/components'
import { currencyFormatter } from 'rt-util'
import styled from 'styled-components'
import { AnalyticsRoute, BlotterRoute, SpotRoute, ShellRoute, TileRoute } from './routes'

const RedBox = styled.div`
  background-color: red;
  height: 300px;
  width: 300px;
  margin-left: auto;
  margin-right: auto
`;

export const Router: FC = () => (
  <Switch>
    <Route
      path="/analytics"
      render={() => (
        <RedBox>app</RedBox>
        // <RouteWrapper windowType="sub" title="Analytics">
        //   <AnalyticsRoute />
        // </RouteWrapper>
      )}
    />
    <Route
      path="/blotter"
      render={routeProps => (
        <RedBox>app</RedBox>
        // <RouteWrapper windowType="sub" title="Trades">
        //   <BlotterRoute {...routeProps} />
        // </RouteWrapper>
      )}
    />

    <Route
      path="/tiles"
      render={() => (
        <RedBox>app</RedBox>
        // <RouteWrapper windowType="sub" title="Trades">
        //   <RedBox>app</RedBox>
        // </RouteWrapper>
      )}
    />
    <Route
      path="/spot/:symbol"
      render={routeProps => (
        <RouteWrapper windowType="sub" title={currencyFormatter(routeProps.match.params.symbol)}>
          <SpotRoute {...routeProps} />
        </RouteWrapper>
      )}
    />
    <Route
      exact
      path="/"
      render={() => (
        <RouteWrapper>
          <ShellRoute />
        </RouteWrapper>
      )}
    />

    <Route path="/openfin-window-frame" render={() => <OpenFinWindowFrame />} />
    <Route path="/openfin-sub-window-frame" render={() => <OpenFinSubWindowFrame />} />
    {/* <Route path="/openfin-sub-window-frame" render={() => <div id="layout-container"></div>} /> */}
  </Switch>
)
