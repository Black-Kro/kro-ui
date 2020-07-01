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

    const disableDocumentSelect = () => {
        document.documentElement.classList.add('kro-helper--prevent-select');
    };

    const enableDocumentSelect = () => {
        document.documentElement.classList.remove('kro-helper--prevent-select');
    };

    return {
        disableDocumentScroll,
        enableDocumentScroll,

        disableDocumentSelect,
        enableDocumentSelect,
    }

}