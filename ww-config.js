export default {
    inherit: 'ww-text',
    options: {
        autoByContent: true,
        displayAllowedValues: ['flex', 'inline-flex'],
        linkable: true,
    },
    editor: {
        label: {
            en: 'Overlay',
            fr: 'Overlay',
        },
        infoTags: () => {
            return [];
        },
        workflowHint: () => {
            return false;
        },
    },
    states: ['focus', 'disabled'],
    triggerEvents: [],
    properties: {
        clickCloses: {
            type: 'OnOff',
            label: {
                en: 'Click closes',
                fr: 'Fermeture au clic',
            },
            section: 'settings',
            defaultValue: true,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'You can prevent the dialog from closing when the user clicks the overlay.',
            },
            /* wwEditor:end */
        },
    },
};
