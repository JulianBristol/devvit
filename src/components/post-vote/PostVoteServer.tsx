import { Post, Vote, VoteType } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import PostVoteClient from "./PostVoteClient";
import { getServerSession } from "next-auth";

interface PostVoteServerProps {
    postId: string;
    initialVotesAmt?: number;
    initialVote?: VoteType | null
    getData?: () => Promise<(Post & {votes: Vote[]}) | null>
}

const PostVoteServer = async ({
	postId, 
	initialVotesAmt, 
	initialVote, 
	getData
}) => {

	const session = await getServerSession();

	let _votesAmt = 0;
	let _currentVote: VoteType | null | undefined = undefined;

	if (getData) {
		const post = await getData();
		if (!post) return notFound();

		_votesAmt = post.votes.reduce((acc, vote) => {
			if (vote.type === "UP") return acc + 1;
			if (vote.type === "DOWN") return acc - 1;
			return acc;
		},0);

		_currentVote = post.votes.find(
			(vote) => vote.userId === session?.user.id
		)?.type;
	} else{
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		_votesAmt = initialVotesAmt!;
		_currentVote = initialVote;
	}

	return <PostVoteClient postId={postId} initialVotesAmt={_votesAmt} initialVote={_currentVote}/>;
};

export default PostVoteServer;