export const ThemeMode = {
    LIGHT: 'light',
    DARK: 'dark',
    UNSET: 'unset'
}

const applyThemeMode = (mode) => {
    document.documentElement.className = `kro-theme__default-${mode}`;
}

export const useTheme = () => {

    const setTheme = (theme: string) => {}

    const getThemeMode = () : string => {
        return localStorage.getItem('kro.theme.mode') || ThemeMode.UNSET;
    }

    /**
     * Returns the theme mode.
     */
    const getActiveThemeMode = () : string => {
        if (!localStorage.getItem('kro.theme.mode')) {
            if ('matchMedia' in window) {
                return window.matchMedia('(prefers-color-scheme: light)').matches ? ThemeMode.LIGHT : ThemeMode.DARK;
            } else {
                return ThemeMode.LIGHT;
            }
        }

        return localStorage.getItem('kro.theme.mode') || ThemeMode.UNSET;
    }

    /**
     * Toggles the theme
     */
    const toggleThemeMode = () => {
        getActiveThemeMode() === ThemeMode.LIGHT ? setThemeMode(ThemeMode.DARK) : setThemeMode(ThemeMode.LIGHT);
    }

    /**
     * Sets the classname and local storage variable for the theme.
     */
    const setThemeMode = (mode) => {
        if (mode === ThemeMode.UNSET) {
            localStorage.removeItem('kro.theme.mode');
        } else {
            localStorage.setItem('kro.theme.mode', mode);
            applyThemeMode(mode);
        }
    }

    return {
        setTheme,
        setThemeMode,
        toggleThemeMode,
        getActiveThemeMode,
        getThemeMode,
    }

};

export const registerThemeWatcher = () => {
    const { getActiveThemeMode } = useTheme();
    
    /**
     * Apply the initial theme of the page.
     */
    applyThemeMode(getActiveThemeMode());
}

