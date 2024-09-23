import Logo from "/components/logo"
import Copyright from "./components/copyright"
import {useConfig} from "nextra-theme-docs";

export default {
    useNextSeoProps: () => ({
        defaultTitle: "Kuroneko Network",
        titleTemplate: "%s - Kuroneko Network",
        description: "黒猫ネットワークの公式サイト",
        openGraph: {
            url: "https://kuroneko.click",
            description: "nextra-ogp-sample",
        },
    }),
    logo: <Logo/>,
    project: {
        link: 'https://github.com/BlackLabs-Team',
    },
    chat: {
        link: 'https://link.kuroneko.click/discord',
    },
    docsRepositoryBase: 'https://github.com/BlackLabs-Team',
    footer: {
        text: <Copyright/>,
    },
    search: {
        placeholder: "検索する..."
    },

    head: () => {
        const { title } = useConfig();
        return (
            <>
                <meta
                    property="og:image"
                    content={`https://yt3.googleusercontent.com/Rmvp9tP6FYaxfX75zZ2LmOUxOxBGNkZnYuTS5YbQHxbZ0jq6DIDMSOh-rcRuSCL1NBd7hhSwNMs=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`}
                />
            </>
        );
    },
    // banner: {
    //     key: 'network-season2-release',
    //     text: (
    //         <a href="./season/season2" target="_blank">
    //             🎉 黒猫ネットワーク、シーズン2が公開！ 詳細はこちら →
    //         </a>
    //     )
    // },
}