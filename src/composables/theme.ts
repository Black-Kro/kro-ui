export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark',
    UNSET = 'unset'
}

const applyThemeMode = (mode) => {
    document.documentElement.className = `kro-theme__nord-${mode}`;
}

export const useTheme = () => {

    const setTheme = (theme: string) => {}

    /**
     * Returns the theme mode.
     */
    const getThemeMode = () : ThemeMode => {
        if (!localStorage.getItem('kro.theme.mode')) {
            if ('matchMedia' in window) {
                return window.matchMedia('(prefers-color-scheme: light)').matches ? ThemeMode.LIGHT : ThemeMode.DARK;
            } else {
                return ThemeMode.LIGHT;
            }
        }

        return localStorage.getItem('kro.theme.mode') as ThemeMode || ThemeMode.UNSET;
    }

    /**
     * Toggles the theme
     */
    const toggleThemeMode = () => {
        getThemeMode() === ThemeMode.LIGHT ? setThemeMode(ThemeMode.DARK) : setThemeMode(ThemeMode.LIGHT);
    }

    /**
     * Sets the classname and local storage variable for the theme.
     */
    const setThemeMode = (mode: ThemeMode) => {
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
        getThemeMode,
    }

};

export const registerThemeWatcher = () => {
    const { getThemeMode } = useTheme();
    
    /**
     * Apply the initial theme of the page.
     */
    applyThemeMode(getThemeMode());
}

