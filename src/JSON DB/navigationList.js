export default [
    {
        title: "About Us",
        type: 'link',
        link: "/aboutUs"
    },
    {
        title: "Services",
        type: 'dropdown',
        link:'/services',
        dropOptions:[
            {
                title: "Mutual Fund Distributor",
                type: 'dropdown',
                dropOptions:[
                    {
                        "title": "Mutual Funds",
                        link: "/services"
                    },
                    {
                        "title": "NPS",
                        link: "/services"
                    },
                    {
                        "title": "Bonds",
                        link: "/services"
                    },
                    {
                        "title": "Tax saving schemas",
                        link: "/services"
                    },
                ]
            },
            {
                title: "Trading",
                type: 'dropdown',
                dropOptions:[
                    {
                        "title": "Trading",
                        link: "/trading"
                    },
                    {
                        "title": "Equity",
                        link: "/trading"
                    },
                    {
                        "title": "F&O",
                        link: "/trading"
                    },
                    {
                        "title": "Commodity",
                        link: "/trading"
                    },
                ]
            },
            {
                title: "Depository",
                type: 'link',
                link: "/depository"
            },
            {
                title: "IPO",
                type: 'link',
                link: "/ipo"
            },
            {
                title: "General Insurance",
                type: 'link',
                link: "/general-insurenece"
            },
            {
                title: "PAN Card",
                type: 'link',
                link: "/pancard"
            },
            {
                title: "SGB",
                type: 'link',
                link: "/sgb"
            },
        ]
    },
    {
        title: "Investor Corner",
        type: 'dropdown',
        dropOptions:[
            {
                title: "Investor Charter",
                type: 'link',
                link: "/investor-charter"
            },
            {
                title: "Advisory For Investors",
                type: 'link',
                link: "/advisory-of-investors"
            },
            {
                title: "List Of Charges",
                type: 'link',
                link: ""
            },
            {
                title: "Margin Calculator",
                type: 'link',
                link: "/margin-calculator"
            },
            {
                title: "News & Announcement",
                type: 'link',
                link: "newsandannouncements"
            },
            {
                title: "Privacy Policy",
                type: 'link',
                link: "/privacy-policy"
            },
            {
                title: "Terms Of Use",
                type: 'link',
                link: ""
            },
            {
                title: "Downloads",
                type: 'link',
                link: "/download"
            }
        ]
    },
    {
        title: "Partner With Us",
        type: 'link',
        link: "/PartnerwithUs"
    },
    {
        title: "Blog",
        type: 'link',
        link: "/blogs-main"
    }
]