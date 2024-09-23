import Logo from "/components/logo"
import Copyright from "./components/copyright"

export default {
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Kuroneko Network'
        }
    },
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
    // banner: {
    //     key: 'network-season2-release',
    //     text: (
    //         <a href="./season/season2" target="_blank">
    //             🎉 黒猫ネットワーク、シーズン2が公開！ 詳細はこちら →
    //         </a>
    //     )
    // },
}