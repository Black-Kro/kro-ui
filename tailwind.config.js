module.exports = {
    purge: {
        enabled: false,
        content: [
            './index.html',
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.ts',
            './demo/**/*.vue',
            './docs/**/*.vue',
            './docs/.config/**/*.vue',
        ]
    },
    future: {
        removeDeprecatedGapUtilities: true,
    },
    experimental: {
        applyComplexClasses: true,
        uniformColorPalette: true,
        extendedSpacingScale: true,
        defaultLineHeights: true,
        extendedFontSizeScale: true,
    },
    
}