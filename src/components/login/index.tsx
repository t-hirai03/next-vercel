"use client";

// import styles from "./index.module.scss";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Logout from "@/components/logout";

// トップページのコンポーネント
const Login = () => {
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
				// githubでログイン
                <a href="/api/auth/signin">
                    ログイン
                </a>
			)}
		</div>
	);
};

export default Login;
