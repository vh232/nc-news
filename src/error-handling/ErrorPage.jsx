import React from "react";
import { Button, Result } from "antd";
import RouteNotFound from "./RouteNotFound"

const ErrorPage = ( {message} ) => {
  if (message === 'not found') {
    return <RouteNotFound />
  }
  return (
    <Result
      status="warning"
      title={`Something has gone wrong: ${message}. Please go back and try again.`}
      extra={
        // <Link to="/" >
            <Button type="primary" key="console" href='/'>
          Back Home
        </Button>
        /* </Link> */
      }
    />
  );
};

export default ErrorPage;
