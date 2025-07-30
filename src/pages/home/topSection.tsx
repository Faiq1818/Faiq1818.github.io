import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";

export default function TopSection() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between">
      <p className="text-4xl font-semibold text-[#c4c4c4]">
        Faiq Ghozy Erlangga
      </p>
      <div
        className="flex flex-row items-center text-[#818181] hover:text-[#BABABA]"
        onClick={() => setIsOpen(true)}
      >
        <IoLanguage size={"1.2em"} />
        <p className="ml-2 pr-3">English</p>
      </div>
      <>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          transition
          className="fixed inset-0 flex w-screen items-center justify-center z-50 bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">
                Deactivate account
              </DialogTitle>
              <Description>
                This will permanently deactivate your account
              </Description>
              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    </div>
  );
}
