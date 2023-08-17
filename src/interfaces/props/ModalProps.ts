import { ReactNode } from 'react';

// this is for modal component itself
export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  actionBar?: ReactNode;
  containerId: string;
}
