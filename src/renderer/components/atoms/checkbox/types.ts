import type { ReactNode } from 'react';

export interface CheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  disabled?: boolean;
}
