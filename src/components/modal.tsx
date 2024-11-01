import { cn } from "@/utils/lib";
import React from "react";

interface IModal extends React.PropsWithChildren {
  isOpen: boolean;
}

const Modal: React.FC<IModal> = ({ isOpen, children }) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 size-full backdrop-blur-sm",
        "!m-0 hidden items-center justify-center z-[9999]",
        { flex: isOpen }
      )}
    >
      <div className="m-4 w-full max-w-sm border p-4 bg-dark">{children}</div>
    </div>
  );
};

export default Modal;
