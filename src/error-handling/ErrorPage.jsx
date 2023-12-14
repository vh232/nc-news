import React from "react";
import { Button, Result } from "antd";

const ErrorPage = ( {message} ) => {
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
