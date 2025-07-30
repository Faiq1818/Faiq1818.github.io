import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

export default function MiddleBar() {
  return (
    <div className="mt-auto mx-5 text-xl flex flex-col">
      <div className="flex flex-row items-center">
        <FaPerson className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
        <p className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
          About me
        </p>
      </div>

      <div className="flex flex-row items-center">
        <FaProjectDiagram className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />

        <Popover className="text-white relative mx-2">
          <PopoverButton className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer">
            Project
          </PopoverButton>
          <PopoverPanel anchor="right" className="flex flex-col bg-white">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
          </PopoverPanel>
        </Popover>
      </div>

      <div className="flex flex-row items-center">
        <BiSolidContact className="text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer" />
        <p className="my-5 text-[#c4c4c4] hover:text-[#E4E4E4] cursor-pointer mx-2">
          Contact
        </p>
      </div>
    </div>
  );
}
