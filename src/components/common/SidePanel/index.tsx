"use client";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import XMarkIcon from "@/public/icons/cencel.svg";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  side: "left" | "right";
};

const SidePanel = ({ children, side = "left" }: Props) => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Dialog as="div" open className="relative z-50" onClose={onDismiss}>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              "pointer-events-none fixed inset-y-0  flex max-w-full",
              {
                "left-0 pr-10": side === "left",
                "right-0 pl-10": side === "right",
              }
            )}
          >
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
              <div className="flex flex-col bg-white h-dvh shadow-xl overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    Shopping cart
                  </Dialog.Title>
                  <div className="ml-3 flex h-5 items-center">
                    <button
                      type="button"
                      className="relative -m-2 p-2 text-gray/40 hover:text-gray-500"
                      onClick={onDismiss}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close panel button</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                {children}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SidePanel;
