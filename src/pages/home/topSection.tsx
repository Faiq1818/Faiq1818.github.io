import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { Switch } from "@headlessui/react";

export default function TopSection() {
  let [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-row justify-between">
      <p className="text-4xl font-semibold text-white">
        Faiq Ghozy Erlangga
      </p>
       
      <div className="flex flex-row">
        <div className="flex cursor-pointer flex-row items-center text-[#818181] hover:text-[#BABABA]">
          <MdDarkMode />
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group ml-2 inline-flex h-5 w-10 items-center rounded-full bg-[#444444] transition data-checked:bg-[#818181]"
          >
            <span className="size-3 translate-x-1 rounded-full bg-[#c4c4c4] transition group-data-checked:translate-x-6" />
          </Switch>
        </div>
        <div className="flex cursor-pointer flex-row items-center text-[#818181] hover:text-[#BABABA] ml-5" onClick={() => setIsOpen(true)}>
          <IoLanguage size={"1.2em"} />
          <p className="ml-2 pr-3">English</p>
        </div>
      </div>

      <>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          transition
          className="fixed inset-0 flex w-screen items-center justify-center z-50 bg-black/45 p-4 transition duration-300 ease-out data-closed:opacity-0"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold items-center">
                Choose a language
              </DialogTitle>
              <div className="flex gap-4">
                <button
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  English
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Bahasa Indonesia
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    </div>
  );
}
