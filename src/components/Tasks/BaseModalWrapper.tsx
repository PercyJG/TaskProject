import { boolean } from "yup/lib/locale";
import EditTaskForm from "./EditTaskForm";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  if (isModalVisible) {
    return null;
  }
  return <EditTaskForm onBackdropClick={onBackdropClick} />;
};

export default BaseModalWrapper;
