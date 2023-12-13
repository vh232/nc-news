import React from "react";
import { Button, Result } from "antd";

const ErrorPage = ({error, message},  ) => {
  console.log(message)
  return (
    <Result
      status="warning"
      title={`Something has gone wrong - please go back and try again.`}
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
