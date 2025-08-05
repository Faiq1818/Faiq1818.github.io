import { useNavigate } from "react-router";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useState } from 'react'
import { BiSolidContact } from "react-icons/bi";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function MiddleBar() {
  let [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  const goToProject = () => {
    navigate('/project');
  };

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <div className="flex mt-auto flex-row justify-between">
      <div className="mt-auto mx-5 text-xl flex flex-col">
        <div className="flex flex-row items-center">
          <FaPerson className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p onClick={goToAbout} className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
            About me
          </p>
        </div>

        <div className="flex flex-row items-center">
          <FaProjectDiagram className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p onClick={goToProject} className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
            Project
          </p>
        </div>

        <div className="flex flex-row items-center">
          <BiSolidContact className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p onClick={open} className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
            Contact me
          </p>
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
                  Contact me
                </DialogTitle>
                <Button
                  className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-white shadow-white/10 focus:not-data-focus:outline-none data-focus:outline  data-hover:text-gray-400"
                  onClick={close}
                >
                  x
                </Button>
              </div>
              <p className="mt-2 text-sm/6 text-white/50">
                You can contact me by sending me an email or reach me using my social media.
              </p>
              <div className="mt-2 text-sm/6 text-white/80">
                ghozyerlanggafaiq@gmail.com
              </div>
              <div className="mt-2 text-sm/6 text-white/80">
                My Instagram
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
