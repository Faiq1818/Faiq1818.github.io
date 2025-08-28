import { useNavigate } from "react-router";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { BiSolidContact } from "react-icons/bi";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const quotes: string[] = [
  "There is no end though there",
  "is a start in space.",
  "— Infinity.",
  "It has own power, it ruins,",
  "and it goes though there",
  "is a start also in the star.",
  "— Finite.",
  "Only the person who was wisdom can",
  "read the most foolish one from the history.",
  "The fish that lives in the sea",
  "doesn't know the world on the land.",
  "Were they to possess wisdom,",
  "they too would fall into ruin.",
  "It is funnier that man exceeds",
  "the speed of light than",
  "for fish to start living on the land.",
  "It can be said that this is a final",
  "ultimatum from the god to the people who defy.",
];

export default function MiddleBar() {
  const [frameIndex, setFrameIndex] = useState<number>(0);
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev === 17 ? 0 : prev + 1));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const goToAbout = () => {
    navigate("/about");
  };

  const goToProject = () => {
    navigate("/project");
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div className="flex mt-auto flex-row justify-between items-center">
      <div className="mt-auto mx-5 text-xl flex flex-col">
        <div className="flex flex-row items-center">
          <FaPerson className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p
            onClick={goToAbout}
            className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2"
          >
            About me
          </p>
        </div>

        <div className="flex flex-row items-center">
          <FaProjectDiagram className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p
            onClick={goToProject}
            className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2"
          >
            Project
          </p>
        </div>

        <div className="flex flex-row items-center">
          <BiSolidContact className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
          <p
            onClick={open}
            className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2"
          >
            Contact me
          </p>
        </div>
      </div>

      <div className="text-white/50">{quotes[frameIndex]}</div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="flex flex-row justify-between">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
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
                You can contact me by sending me an email or reach me using my
                social media.
              </p>
              <div className="mt-2 text-sm/6 text-white/80">
                ghozyerlanggafaiq@gmail.com
              </div>
              <div className="mt-2 text-sm/6 text-white/80">My Instagram</div>
              <div className="mt-4"></div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
