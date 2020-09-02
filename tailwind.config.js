module.exports = {
    purge: {
        enabled: true,
        content: [
            './index.html',
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.ts',
            './demo/**/*.vue',
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