import { Story } from "@ladle/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { IModalProps } from "./modal.types";
export const ModalStory: Story<IModalProps> = ({
  title,
  children,
  closeOnClickOutside,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        {...props}
        baseStyles={{ backgroundColor: "var(--ladle-bg-color-secondary)" }}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title={title}
        closeOnClickOutside={closeOnClickOutside}
      >
        {children}
      </Modal>
    </>
  );
};

ModalStory.args = {
  title: "Modal Title",
  children: <div>Modal Content</div>,
  closeOnClickOutside: true,
  isCloseIconVisible: true
};
ModalStory.argTypes = {};
