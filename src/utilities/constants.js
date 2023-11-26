import { ICONS } from '../utilities/Assets';

export const CRYPTO_KEYS = {
    SMS: {
        key: '4pp12m0v1st4rCHILE', 
        iv: '45m8v1st4r4ppSVR'
    }, 
    APP: {
        key: '12345m0v1st4rCHILE:1574863812000', 
        iv: '45m0v1st4rCHILE1'
    }
};


/* ------------------- Drawer Menu ------------------- */
export const DRAWER_MENU_SECTIONS = [
    {
        type: 'section',
        title: 'Menú',
        items: [
            {
                description: 'Buttons',
                icon: ICONS.alert,
                route: 'Buttons',
                flag: 'buttons',
            },
            {
                description: 'Texts',
                icon: ICONS.alert,
                route: 'Texts',
                flag: 'texts',
            },
            {
                description: 'Modals',
                icon: ICONS.alert,
                route: 'Modals',
                flag: 'modals',
            },
            {
                description: 'Forms',
                icon: ICONS.alert,
                route: 'Forms',
                flag: 'forms',
            },
            {
                description: 'Stores',
                icon: ICONS.alert,
                route: 'Stores',
                flag: 'stores',
            },
        ],
     }, 
];