import React from "react";
import Menu from "../menu/Menu";
import Topic from "../topic/Topic";

import { Switch, Route, useRouteMatch } from "react-router-dom";
export default function Home() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Menu />

      <Switch>
        <Route exact path={path}>
          <h3>Home.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <div className="container-fluid">
            <Topic/>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
