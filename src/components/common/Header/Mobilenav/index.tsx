"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CrossIcon from "@/public/icons/cross.svg";
import UserIcon from "@/public/icons/user.svg";
import CartIcon from "@/public/icons/cart.svg";
import Link from "next/link";
import style from "./mobilenav.module.css";
import Button from "../../Button";
import useToggleState from "@/lib/hooks/use-toggle-state";
import HamburgerIcon from "@/public/icons/hamburger.svg";

type Props = {
	data: {
		heading1: string;
		heading2: string;
		navLinks: Array<{
			id: number;
			title: string;
			url: string;
		}>;
	};
};

function Mobilenav({ data }: Props) {
	const { state, open, close } = useToggleState();

	return (
		<>
			<div className={style.mobileNav}>
				<div className={style.logoWrapper}>
					<h1 className={style.heading1}>{data.heading1}</h1>
					<h1 className={style.heading2}>{data.heading2}</h1>
				</div>

				<Button variant="icon" title="menu button" onClick={open}>
					<HamburgerIcon className="h-6" />
				</Button>
			</div>

			<Transition.Root show={!!state} as={Fragment}>
				<Dialog as="div" className="relative md:hidden" onClose={close}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className={style.blurEffect} onClick={close}></div>
					</Transition.Child>

					<div className={style.sideMenu}>
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className={`no-scrollbar ${style.dialogPanel}`}>
								<div className={style.container}>
									<div className={style.menuHeader}>
										<div className="flex">
											<h1 className={style.heading1}>{data.heading1}</h1>
											<h1 className={style.heading2}>{data.heading2}</h1>
										</div>
										<a>
											<CrossIcon className="h-6 text-white" onClick={close} />
										</a>
									</div>

									<div className={style.navLinks}>
										{data &&
											data.navLinks.map((item) => {
												return (
													<Link
														href={item.url}
														key={item.id}
														className={style.link}
													>
														{item.title}
													</Link>
												);
											})}
									</div>
									<div className={style.icons}>
										<Button variant="icon">
											<UserIcon className="h-5" />
										</Button>
										<Button variant="icon">
											<CartIcon className="h-5" />
										</Button>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}

export default Mobilenav;
