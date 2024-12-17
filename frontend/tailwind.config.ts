module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/*.vue',
        './pages/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                primarybis: '#211412',
                secondary: '#F9F4F3',
            },
            height: {
                'full-minus-80': 'calc(100%-5rem)',
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
            },
            boxShadow: {
                text: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Custom text shadow
            },
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
            }
        },
    },
    plugins: [],
}
