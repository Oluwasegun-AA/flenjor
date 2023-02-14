import React, { JSXElementConstructor, ReactElement } from 'react';

interface IButton {
  className: string;
  value?: string | ReactElement<any, string | JSXElementConstructor<any>>;
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

function Button({ className, onClick, value }: IButton): ReactElement {
  return (
    <span className={className} onClick={onClick}>
      {value}
    </span>
  );
}

export default Button;
