import { Story } from "@ladle/react";
import { useState } from "react";
import { Dialog } from "./Dialog";
import { IDialogProps } from "./dialog.types";

export const DialogStory: Story<IDialogProps> = ({
  children,
  closeOnClickOutside,
  ...props
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        Open Dialog
      </button>
      <Dialog
        {...props}
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
        }}
        closeOnClickOutside={closeOnClickOutside}
      >
        {children}
      </Dialog>
    </>
  );
};

DialogStory.args = {
  children: <div>Dialog Content</div>,
  closeOnClickOutside: false,
  isCloseIconVisible: true
};
DialogStory.argTypes = {};
