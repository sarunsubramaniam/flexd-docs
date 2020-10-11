import React from "react";

export default function Code(props) {
  return (
    <pre>
      <code className={props.language}>{props.children}</code>
    </pre>
  );
}
