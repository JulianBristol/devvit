<<<<<<< HEAD
import React from "react";
import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";

const NavBar = () => {
	return (
		<div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
			<div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
				{/* logo */}
				<Link href='/' className="flex gap-2 items-center">
					<Icons.logo className='h-8 w-8 sm:h-6 sm:w-6'/>
					<p className="hidden text-zinc-700 text-sm font-medium md:block">Breadit</p>
				</Link>
=======
import Link from "next/link"
import { Icons } from "./Icons"
import { buttonVariants } from "./ui/Button"
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const NavBar = async () => {

    const session = await getAuthSession();

    return <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
        <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
            {/* logo */}
            <Link href='/' className="flex gap-2 items-center">
                <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6'/>
                <p className="hidden text-zinc-700 text-sm font-medium md:block">Breadit</p>
            </Link>
>>>>>>> 21defbd5cfe83aaa32b7768932d1db0a66c23c8c

				{/* search bar */}

<<<<<<< HEAD
				<Link href='/sign-in' className={buttonVariants()}>Sign In</Link>
			</div>
		</div>
	);};
=======

            {session?.user ? (<UserAccountNav user={session.user} />) : <p>This site is under construction</p>}
            <Link href='/sign-in' className={buttonVariants()}>Sign In</Link>
        </div>
    </div>
    }
>>>>>>> 21defbd5cfe83aaa32b7768932d1db0a66c23c8c

export default NavBar;