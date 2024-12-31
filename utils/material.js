import { hexFromArgb } from '@material/material-color-utilities';

export const getMissingColorString = (theme, darkMode) => {
    const { primary, secondary, tertiary, neutral } = theme.palettes;

    const lightColors = new Map([
        ['--md-sys-color-primary-fixed', hexFromArgb(primary.tone(90))],
        ['--md-sys-color-primary-fixed-dim', hexFromArgb(neutral.tone(80))],
        ['--md-sys-color-on-primary-fixed', hexFromArgb(primary.tone(10))],
        ['--md-sys-color-on-primary-fixed-variant', hexFromArgb(primary.tone(30))],
        ['--md-sys-color-secondary-fixed', hexFromArgb(secondary.tone(90))],
        ['--md-sys-color-secondary-fixed-dim', hexFromArgb(secondary.tone(80))],
        ['--md-sys-color-on-secondary-fixed', hexFromArgb(secondary.tone(10))],
        ['--md-sys-color-on-secondary-fixed-variant', hexFromArgb(secondary.tone(30))],
        ['--md-sys-color-tertiary-fixed', hexFromArgb(tertiary.tone(90))],
        ['--md-sys-color-tertiary-fixed-dim', hexFromArgb(tertiary.tone(80))],
        ['--md-sys-color-on-tertiary-fixed', hexFromArgb(tertiary.tone(10))],
        ['--md-sys-color-on-tertiary-fixed-variant', hexFromArgb(tertiary.tone(30))],
        ['--md-sys-color-surface-dim', hexFromArgb(neutral.tone(87))],
        ['--md-sys-color-surface-bright', hexFromArgb(neutral.tone(98))],
        ['--md-sys-color-surface-container-lowest', hexFromArgb(neutral.tone(100))],
        ['--md-sys-color-surface-container-low', hexFromArgb(neutral.tone(96))],
        ['--md-sys-color-surface-container', hexFromArgb(neutral.tone(94))],
        ['--md-sys-color-surface-container-high', hexFromArgb(neutral.tone(92))],
        ['--md-sys-color-surface-container-highest', hexFromArgb(neutral.tone(90))]
    ])

    const darkColors = new Map([
        ['--md-sys-color-surface-dim', hexFromArgb(neutral.tone(6))],
        ['--md-sys-color-surface-bright', hexFromArgb(neutral.tone(24))],
        ['--md-sys-color-surface-container-lowest', hexFromArgb(neutral.tone(4))],
        ['--md-sys-color-surface-container-low', hexFromArgb(neutral.tone(10))],
        ['--md-sys-color-surface-container', hexFromArgb(neutral.tone(12))],
        ['--md-sys-color-surface-container-high', hexFromArgb(neutral.tone(17))],
        ['--md-sys-color-surface-container-highest', hexFromArgb(neutral.tone(22))]
    ])
    if (!darkMode) {
        return Array.from(lightColors, ([key, value]) => `${key}: ${value}`).join('; ')
    } else {
        const mixed = new Map([...lightColors.entries(), ...darkColors.entries()])
        return Array.from(mixed, ([key, value]) => `${key}: ${value}`).join('; ')
    }
};