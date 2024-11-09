
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/*.vue",
      "./pages/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
        extend: {
          colors: {
            primary: '#211412',
            secondary: '#F9F4F3',
          },
          height: {
            'full-minus-80': 'calc(100%-5rem)'
          },
        },
      },
    plugins: [],
  }