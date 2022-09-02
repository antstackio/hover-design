import { Modal, IModalProps, Button } from "@hover-design/react";

import React, { useState } from "react";

const ModalExample = (props: IModalProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        {...props}
      ></Modal>
    </div>
  );
};

export default ModalExample;
