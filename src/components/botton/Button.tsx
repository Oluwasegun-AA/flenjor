import React, { FC, JSXElementConstructor, ReactElement } from 'react';

interface IButton {
  className: string;
  value?: string | ReactElement<any, string | JSXElementConstructor<any>>;
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Button: FC<IButton> = ({
  className,
  onClick,
  value,
}: IButton): ReactElement => (
  <span className={className} onClick={onClick}>
    {value}
  </span>
);

export default Button;
