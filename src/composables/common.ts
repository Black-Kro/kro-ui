export const useWindow = () => {

    /**
     * Disables the document from scrolling.
     */
    const disableDocumentScroll = () => {
        document.documentElement.classList.add('kro-helper--prevent-scroll');
    };
        
    /**
     * Enables the document scrolling
     */
    const enableDocumentScroll = () => {
            document.documentElement.classList.remove('kro-helper--prevent-scroll');
    };

    return {
        disableDocumentScroll,
        enableDocumentScroll,
    }

}