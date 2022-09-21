import { Dialog, IDialogProps, Button } from "@hover-design/react";

import React, { useState } from "react";

const DialogExample = (props: IDialogProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        {...props}
      ></Dialog>
    </div>
  );
};

export default DialogExample;
