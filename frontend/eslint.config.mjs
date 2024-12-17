// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    // Your custom configs here
    {
        rules: {
            // ...Override rules, for example:
            'indent': ['error', 4],
            '@stylistic/indent': ['off'],
        },
    },
)
