import { toast } from 'sonner';
import { ToastResponse, ToasterProps } from '@/types/toast.types';

export const toaster = ({ key, message, description }: ToasterProps): void => {
  const response: ToastResponse = {
    success: () => toast.success(message, { description }),
    error: () => toast.error(message, { description }),
    info: () => toast.info(message, { description }),
    warning: () => toast.warning(message, { description }),
  };

  return response[key](message, description);
};
