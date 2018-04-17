// 菜单选项
export const MENU = [
    {
        href: "#",
        icon: "icon-speedometer",
        name: "Dashboard"
    },
    {
        href: "#",
        icon: "icon-layers",
        name: "数据管理",
        sub: [
            {
                href: "#",
                icon: "icon-bubble",
                name: "聊天记录管理"
            },
            {
                href: "#",
                icon: "icon-chart",
                name: "数据统计"

            }
        ]
    },
    {
        href: "/intent",
        icon: "icon-settings",
        name: "意图引擎"
    },
    {
        href: "#",
        icon: "icon-drawer",
        name: "聚类"
    },
    {
        href: "#",
        icon: "icon-question",
        name: "问答定制"
    },{
        href: "#",
        icon: "icon-book-open",
        name: "词库"
    },{
        href: "#",
        icon: "icon-speedometer",
        name: "任务引擎",
        sub: [
            {
                href: "#",
                icon: "icon-social-youtube",
                name: "场景"
            },
            {
                href: "#",
                icon: "icon-cloud-upload",
                name: "上传转换数据"

            }
        ]
    },{
        href: "#",
        icon: "icon-briefcase",
        name: "使用说明",
        class: "nav-link-danger"
    }
        
];
