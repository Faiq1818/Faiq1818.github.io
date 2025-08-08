import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { Switch } from "@headlessui/react";

export default function TopSection() {
  let [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

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
        <div className="flex cursor-pointer flex-row items-center text-[#818181] hover:text-[#BABABA] ml-5" onClick={open}>
          <IoLanguage size={"1.2em"} />
          <p className="ml-2 pr-3">English</p>
        </div>
      </div>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="flex flex-row justify-between">
                <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                  Choose a language
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-white shadow-white/10 focus:not-data-focus:outline-none data-focus:outline  data-hover:text-gray-400"
                  onClick={close}
                >
                  x
                </Button>
              </div>

              <div className="mt-2 text-sm/6 text-white/80">
                English
              </div>
              <div className="mt-2 text-sm/6 text-white/80">
                Bahasa Indonesia
              </div>
              <div className="mt-4">
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
