# Theme and Language Features Guide

## Overview
Your portfolio now supports **Dark/Light Theme Toggle** and **Multilingual Support** (English, Hindi, Marathi).

## Features

### 🌓 Dark/Light Theme Toggle

#### How It Works
- **Default Theme**: Dark mode
- **Toggle Button**: Located in the navigation bar (☀️/🌙 icon)
- **Persistence**: Theme preference is saved in browser's localStorage
- **Smooth Transition**: All colors transition smoothly when switching themes

#### Theme Colors

**Dark Theme (Default):**
- Background: Dark blue/slate tones
- Text: Light colors for readability
- Accent: Purple/blue gradients

**Light Theme:**
- Background: White/light gray tones
- Text: Dark colors for readability
- Accent: Same purple/blue gradients (maintained for brand consistency)

#### Implementation Details
```javascript
// Theme is stored in localStorage
localStorage.getItem('theme') // Returns 'dark' or 'light'

// Theme is applied via data attribute
document.documentElement.setAttribute('data-theme', 'light');
```

#### CSS Variables
All colors use CSS custom properties that change based on theme:
```css
:root {
    --bg-primary: #0f172a;  /* Dark theme */
    --text-primary: #f8fafc;
}

[data-theme="light"] {
    --bg-primary: #ffffff;  /* Light theme */
    --text-primary: #1e293b;
}
```

---

### 🌍 Multilingual Support

#### Supported Languages
1. **English (EN)** 🇬🇧 - Default
2. **Hindi (HI)** 🇮🇳 - हिंदी
3. **Marathi (MR)** 🇮🇳 - मराठी

#### How It Works
- **Language Selector**: Dropdown in navigation bar
- **Persistence**: Language preference saved in localStorage
- **Dynamic Updates**: All text updates instantly without page reload
- **Fallback**: Defaults to English if translation missing

#### What Gets Translated

**Navigation:**
- About, Experience, Skills, Technical Skills, Education, Contact

**Hero Section:**
- Greeting, subtitle, description
- Button labels (Get In Touch, View Work, Download CV)
- Statistics labels (Years Experience, Projects Completed, Technologies)

**Section Headers:**
- All section tags and titles
- Category names in Technical Skills section

**Contact Section:**
- Section labels and headings

**Footer:**
- Copyright text and tagline

#### Adding New Languages

1. **Edit `translations.js`:**
```javascript
const translations = {
    en: { /* English translations */ },
    hi: { /* Hindi translations */ },
    mr: { /* Marathi translations */ },
    // Add new language
    es: {
        nav: {
            about: "Acerca de",
            experience: "Experiencia",
            // ... more translations
        }
    }
};
```

2. **Update language selector in `index.html`:**
```html
<select class="language-selector" id="languageSelector">
    <option value="en">🇬🇧 EN</option>
    <option value="hi">🇮🇳 हिं</option>
    <option value="mr">🇮🇳 मर</option>
    <option value="es">🇪🇸 ES</option> <!-- New language -->
</select>
```

#### Translation Structure

```javascript
{
    nav: {
        about: "About",
        experience: "Experience",
        // ...
    },
    hero: {
        greeting: "Hi, I'm",
        subtitle: "Staff Software Engineer",
        // ...
    },
    // ... more sections
}
```

#### Using Translations in HTML

Add `data-i18n` attribute with translation key:
```html
<span data-i18n="hero.greeting">Hi, I'm</span>
<h2 data-i18n="about.title">About Me</h2>
```

The JavaScript will automatically update these elements when language changes.

---

## User Guide

### For Visitors

**Changing Theme:**
1. Click the sun/moon icon (☀️/🌙) in the top navigation
2. Theme switches instantly
3. Your preference is remembered for next visit

**Changing Language:**
1. Click the language dropdown in the top navigation
2. Select your preferred language (EN/हिं/मर)
3. All text updates immediately
4. Your preference is remembered for next visit

### For Developers

**Theme Toggle Implementation:**
```javascript
// In script.js
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
});
```

**Language Switch Implementation:**
```javascript
// In script.js
const languageSelector = document.getElementById('languageSelector');
languageSelector.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    localStorage.setItem('language', currentLanguage);
    updateLanguage(currentLanguage);
});
```

---

## File Structure

```
kiran-portfolio-website/
├── index.html              # Main HTML with data-i18n attributes
├── styles.css              # Theme variables and styling
├── script.js               # Theme & language logic
├── translations.js         # All language translations
└── THEME_AND_LANGUAGE_GUIDE.md  # This file
```

---

## Browser Compatibility

### Theme Toggle
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers
- ✅ All modern browsers supporting CSS custom properties

### Language Support
- ✅ All modern browsers
- ✅ No external dependencies
- ✅ Works offline (after initial load)

---

## Accessibility

### Theme Toggle
- **ARIA Label**: "Toggle theme" for screen readers
- **Keyboard Accessible**: Can be activated with Enter/Space
- **Visual Feedback**: Icon changes based on current theme
- **High Contrast**: Both themes maintain WCAG AA contrast ratios

### Language Selector
- **ARIA Label**: "Select language" for screen readers
- **Keyboard Accessible**: Standard dropdown navigation
- **Clear Labels**: Language names in native script

---

## Performance

### Theme Switching
- **Instant**: No page reload required
- **Smooth**: CSS transitions for color changes
- **Lightweight**: Only CSS variables change

### Language Switching
- **Fast**: All translations loaded upfront (~5KB)
- **No Network**: No API calls needed
- **Efficient**: Only updates visible text elements

---

## Customization

### Adding More Theme Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --custom-color: #your-color;
}

[data-theme="light"] {
    --custom-color: #your-light-color;
}
```

### Customizing Translations

Edit `translations.js`:
```javascript
const translations = {
    en: {
        custom: {
            message: "Your custom message"
        }
    }
};
```

Then use in HTML:
```html
<span data-i18n="custom.message">Your custom message</span>
```

---

## Troubleshooting

### Theme Not Persisting
**Issue**: Theme resets on page reload
**Solution**: Check browser's localStorage is enabled

### Language Not Changing
**Issue**: Text doesn't update when selecting language
**Solution**: 
1. Check `translations.js` is loaded
2. Verify `data-i18n` attributes are correct
3. Check browser console for errors

### Missing Translations
**Issue**: Some text shows in English even in other languages
**Solution**: Add missing translations to `translations.js`

---

## Future Enhancements

Potential improvements:
1. **More Languages**: Spanish, French, German, etc.
2. **Auto-detect**: Detect browser language automatically
3. **RTL Support**: For Arabic, Hebrew, etc.
4. **Theme Variants**: Multiple color schemes
5. **Font Size Toggle**: Accessibility feature
6. **High Contrast Mode**: For better accessibility

---

## Testing Checklist

- [ ] Theme toggle works on desktop
- [ ] Theme toggle works on mobile
- [ ] Theme persists after page reload
- [ ] All colors change appropriately
- [ ] Language selector shows all options
- [ ] Language changes update all text
- [ ] Language persists after page reload
- [ ] Translations are accurate
- [ ] No console errors
- [ ] Smooth transitions between themes
- [ ] Keyboard navigation works
- [ ] Screen reader announces changes

---

## Support

For issues or questions:
- **Email**: kiranbadave06@gmail.com
- **GitHub**: https://github.com/kiran-badave
- **Portfolio**: https://kiran-badave.github.io/

---

**Last Updated**: January 19, 2026
**Version**: 2.1.0
**Author**: Kiran Badave