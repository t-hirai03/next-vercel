"use client";

import styles from "./index.module.scss";
import Login from "@/components/login";
import Logout from "@/components/logout";
import { useSession } from "next-auth/react";
import Image from "next/image";

// トップページのコンポーネント
const Top = () => {
	const { data: session, status } = useSession();
	return (
		<div>
			{status === 'authenticated' ? (
				<div>
					<p>セッションの期限：{session.expires}</p>
					<p>ようこそ、{session.user?.name}さん</p>
					<Image
						src={session.user?.image ?? ``}
						alt=""
						width={100}
						height={100}
						style={{ borderRadius: '50px' }}
					/>
					<div>
						<Logout />
					</div>
				</div>
			) : (
				<Login />
			)}
		</div>
	);
};

export default Top;
