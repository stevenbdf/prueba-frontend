module.exports = {
    corePlugins: {
        container: false,
    },
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'it': '945px',
            'lg': '1024px',
            'xl': '1280px',
        },
        textColor: {
            'primary': '#0A2677',
            'secondary': '#9E9E9E',
            'title': '#162975',
            'success': '#8BC34A',
            'danger': '#D50000',
            'warning': '#FFDD57',
            'proceso': '#BBDEFB',
            'white': '#FFFFFF',
            'black': '#363636',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            // Color regular
            'primary': '#0A2677',
            'secondary': '#9E9E9E',
            'title': '#162975',
            'success': '#8BC34A',
            'danger': '#D50000',
            'warning': '#FFDD57',
            'proceso': '#BBDEFB',
            // Color hover
            'primary-hover': '#146C8F',
            'secondary-hover': '#858585',
            'title-hover': '#11205C',
            'success-hover': '#5C8231',
            'danger-hover': '#BD0000',
            'warning-hover': '#E6C74E',
            'proceso-hover': '#A8C7E0',
            'back-hover': '#DDDDDD',
            'white-hover': '#F5F5F5',
            // adicional
            'back': '#EEEEEE',
            'overlay': '#36363665',
            'card': '#ffffffd2',
            'youtube-overlay': '#0000001b',
        })
    },
    variants: {},
    plugins: []
}
