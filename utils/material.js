import { hexFromArgb } from '@material/material-color-utilities';

export const getMissingColorString = (theme, darkMode) => {
    const { primary, secondary, tertiary, neutral, error, neutralVariant } = theme.palettes;

    const lightColors = new Map([
        // Primary Colors
        ['--md-sys-color-primary', hexFromArgb(primary.tone(40))],
        ['--md-sys-color-primary-container', hexFromArgb(primary.tone(90))],
        ['--md-sys-color-primary-fixed', hexFromArgb(primary.tone(90))],
        ['--md-sys-color-primary-fixed-dim', hexFromArgb(primary.tone(80))],
        ['--md-sys-color-on-primary', hexFromArgb(primary.tone(100))],
        ['--md-sys-color-on-primary-container', hexFromArgb(primary.tone(10))],
        ['--md-sys-color-on-primary-fixed', hexFromArgb(primary.tone(10))],
        ['--md-sys-color-on-primary-fixed-variant', hexFromArgb(primary.tone(30))],
        ['--md-sys-color-inverse-primary', hexFromArgb(primary.tone(80))],

        // Secondary Colors
        ['--md-sys-color-secondary', hexFromArgb(secondary.tone(40))],
        ['--md-sys-color-secondary-container', hexFromArgb(secondary.tone(90))],
        ['--md-sys-color-secondary-fixed', hexFromArgb(secondary.tone(90))],
        ['--md-sys-color-secondary-fixed-dim', hexFromArgb(secondary.tone(80))],
        ['--md-sys-color-on-secondary', hexFromArgb(secondary.tone(100))],
        ['--md-sys-color-on-secondary-container', hexFromArgb(secondary.tone(10))],
        ['--md-sys-color-on-secondary-fixed', hexFromArgb(secondary.tone(10))],
        ['--md-sys-color-on-secondary-fixed-variant', hexFromArgb(secondary.tone(30))],

        // Tertiary Colors
        ['--md-sys-color-tertiary', hexFromArgb(tertiary.tone(40))],
        ['--md-sys-color-tertiary-container', hexFromArgb(tertiary.tone(90))],
        ['--md-sys-color-tertiary-fixed', hexFromArgb(tertiary.tone(90))],
        ['--md-sys-color-tertiary-fixed-dim', hexFromArgb(tertiary.tone(80))],
        ['--md-sys-color-on-tertiary', hexFromArgb(tertiary.tone(100))],
        ['--md-sys-color-on-tertiary-container', hexFromArgb(tertiary.tone(10))],
        ['--md-sys-color-on-tertiary-fixed', hexFromArgb(tertiary.tone(10))],
        ['--md-sys-color-on-tertiary-fixed-variant', hexFromArgb(tertiary.tone(30))],

        // Surface Colors
        ['--md-sys-color-surface', hexFromArgb(neutral.tone(98))],
        ['--md-sys-color-surface-tint', hexFromArgb(primary.tone(40))],
        ['--md-sys-color-surface-dim', hexFromArgb(neutral.tone(87))],
        ['--md-sys-color-surface-bright', hexFromArgb(neutral.tone(98))],
        ['--md-sys-color-surface-container-lowest', hexFromArgb(neutral.tone(100))],
        ['--md-sys-color-surface-container-low', hexFromArgb(neutral.tone(96))],
        ['--md-sys-color-surface-container', hexFromArgb(neutral.tone(94))],
        ['--md-sys-color-surface-container-high', hexFromArgb(neutral.tone(92))],
        ['--md-sys-color-surface-container-highest', hexFromArgb(neutral.tone(90))],

        // Error Colors
        ['--md-sys-color-error', hexFromArgb(error.tone(40))],
        ['--md-sys-color-error-container', hexFromArgb(error.tone(90))],
        ['--md-sys-color-on-error', hexFromArgb(error.tone(100))],
        ['--md-sys-color-on-error-container', hexFromArgb(error.tone(10))],

        // Outline Colors
        ['--md-sys-color-outline', hexFromArgb(neutralVariant.tone(50))],
        ['--md-sys-color-outline-variant', hexFromArgb(neutralVariant.tone(80))],

        // Inverse and Scrim Colors
        ['--md-sys-color-background', hexFromArgb(neutral.tone(98))],
        ['--md-sys-color-inverse-on-surface', hexFromArgb(neutral.tone(95))],
        ['--md-sys-color-inverse-surface', hexFromArgb(neutral.tone(20))],
        ['--md-sys-color-scrim', hexFromArgb(neutral.tone(0))],
        ['--md-sys-color-shadow', hexFromArgb(neutral.tone(0))],

        // On-Surface Colors
        ['--md-sys-color-on-background', hexFromArgb(neutral.tone(10))],
        ['--md-sys-color-on-surface', hexFromArgb(neutral.tone(10))],
        ['--md-sys-color-on-surface-variant', hexFromArgb(neutralVariant.tone(30))],

        // Surface Variant Colors
        ['--md-sys-color-surface-variant', hexFromArgb(neutralVariant.tone(90))]
    ])

    const darkColors = new Map([
        // Primary Colors
        ['--md-sys-color-primary', hexFromArgb(primary.tone(80))],
        ['--md-sys-color-primary-container', hexFromArgb(primary.tone(30))],
        ['--md-sys-color-primary-fixed', hexFromArgb(primary.tone(90))],
        ['--md-sys-color-primary-fixed-dim', hexFromArgb(primary.tone(80))],
        ['--md-sys-color-on-primary', hexFromArgb(primary.tone(20))],
        ['--md-sys-color-on-primary-container', hexFromArgb(primary.tone(90))],
        ['--md-sys-color-on-primary-fixed', hexFromArgb(primary.tone(10))],
        ['--md-sys-color-on-primary-fixed-variant', hexFromArgb(primary.tone(30))],
        ['--md-sys-color-inverse-primary', hexFromArgb(primary.tone(40))],
    
        // Secondary Colors
        ['--md-sys-color-secondary', hexFromArgb(secondary.tone(80))],
        ['--md-sys-color-secondary-container', hexFromArgb(secondary.tone(30))],
        ['--md-sys-color-secondary-fixed', hexFromArgb(secondary.tone(90))],
        ['--md-sys-color-secondary-fixed-dim', hexFromArgb(secondary.tone(80))],
        ['--md-sys-color-on-secondary', hexFromArgb(secondary.tone(20))],
        ['--md-sys-color-on-secondary-container', hexFromArgb(secondary.tone(90))],
        ['--md-sys-color-on-secondary-fixed', hexFromArgb(secondary.tone(10))],
        ['--md-sys-color-on-secondary-fixed-variant', hexFromArgb(secondary.tone(30))],
    
        // Tertiary Colors
        ['--md-sys-color-tertiary', hexFromArgb(tertiary.tone(80))],
        ['--md-sys-color-tertiary-container', hexFromArgb(tertiary.tone(30))],
        ['--md-sys-color-tertiary-fixed', hexFromArgb(tertiary.tone(90))],
        ['--md-sys-color-tertiary-fixed-dim', hexFromArgb(tertiary.tone(80))],
        ['--md-sys-color-on-tertiary', hexFromArgb(tertiary.tone(20))],
        ['--md-sys-color-on-tertiary-container', hexFromArgb(tertiary.tone(90))],
        ['--md-sys-color-on-tertiary-fixed', hexFromArgb(tertiary.tone(10))],
        ['--md-sys-color-on-tertiary-fixed-variant', hexFromArgb(tertiary.tone(30))],
    
        // Surface Colors
        ['--md-sys-color-surface', hexFromArgb(neutral.tone(6))],
        ['--md-sys-color-surface-tint', hexFromArgb(primary.tone(80))],
        ['--md-sys-color-surface-dim', hexFromArgb(neutral.tone(6))],
        ['--md-sys-color-surface-bright', hexFromArgb(neutral.tone(24))],
        ['--md-sys-color-surface-container-lowest', hexFromArgb(neutral.tone(4))],
        ['--md-sys-color-surface-container-low', hexFromArgb(neutral.tone(10))],
        ['--md-sys-color-surface-container', hexFromArgb(neutral.tone(12))],
        ['--md-sys-color-surface-container-high', hexFromArgb(neutral.tone(17))],
        ['--md-sys-color-surface-container-highest', hexFromArgb(neutral.tone(22))],
    
        // Error Colors
        ['--md-sys-color-error', hexFromArgb(error.tone(80))],
        ['--md-sys-color-error-container', hexFromArgb(error.tone(30))],
        ['--md-sys-color-on-error', hexFromArgb(error.tone(20))],
        ['--md-sys-color-on-error-container', hexFromArgb(error.tone(90))],
    
        // Outline Colors
        ['--md-sys-color-outline', hexFromArgb(neutralVariant.tone(60))],
        ['--md-sys-color-outline-variant', hexFromArgb(neutralVariant.tone(30))],
    
        // Inverse and Scrim Colors
        ['--md-sys-color-background', hexFromArgb(neutral.tone(6))],
        ['--md-sys-color-inverse-on-surface', hexFromArgb(neutral.tone(20))],
        ['--md-sys-color-inverse-surface', hexFromArgb(neutral.tone(90))],
        ['--md-sys-color-scrim', hexFromArgb(neutral.tone(0))],
        ['--md-sys-color-shadow', hexFromArgb(neutral.tone(0))],
    
        // On-Surface Colors
        ['--md-sys-color-on-background', hexFromArgb(neutral.tone(90))],
        ['--md-sys-color-on-surface', hexFromArgb(neutral.tone(90))],
        ['--md-sys-color-on-surface-variant', hexFromArgb(neutralVariant.tone(80))],
    
        // Surface Variant Colors
        ['--md-sys-color-surface-variant', hexFromArgb(neutralVariant.tone(30))]
    ]);
    
    return Array.from(darkMode ? darkColors : lightColors, ([key, value]) => `${key}: ${value}`).join('; ')
    
}