import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button (props: ButtonsProps) {
  return (
  <button className="button" {...props} />
  )
}