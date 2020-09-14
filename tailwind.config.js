module.exports = {
    purge: {
        enabled: true,
        content: [
            './index.html',
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.ts',
            './demo/**/*.vue',
            './docs/**/*.vue',
            './docs/**/*.ts',
            './docs/**/*.js',
        ]
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    experimental: {
        applyComplexClasses: true,
        uniformColorPalette: true,
        extendedSpacingScale: true,
        defaultLineHeights: true,
        extendedFontSizeScale: true,
    },
    
}