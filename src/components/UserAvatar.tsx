import { AvatarFallback, AvatarProps } from "@radix-ui/react-avatar";
import { User } from "next-auth";
import React, { FC } from "react";
import { Avatar } from "./ui/Avatar";
import Image from "next/image";
import { Icons } from "./Icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
	return (
		<Avatar {...props}>
			{user.image ? (
				<div className="relative aspect-square h-full w-full">
					<Image
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						src={user.image}
						alt="profile picture"
						referrerPolicy="no-referrer"
					/>
				</div>
			) : (
				<AvatarFallback>
					<span className="sr-only">{user?.name}</span>
					<Icons.user className="h-4 w-4" />
				</AvatarFallback>
			)}
		</Avatar>
	);
};

export default UserAvatar;
