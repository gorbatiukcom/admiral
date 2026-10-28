# Budcor redesign review checklist

Use this checklist to review the requested changes task by task. Boxes are intentionally unchecked for manual acceptance.

## Homepage — `/`

- [x] Hero slider uses all five photos from `/public/images/main-hero`.
- [x] Slider navigation and mobile swipe work. Arrow and pause controls were subsequently removed; review the dots-only UI below.
- [x] Secondary buttons such as **„Zobacz projekty”** display all four borders.
- [ ] Mobile process numbers stay on one line and align with their headings.
- [ ] Hero text uses the blue accent on both mobile and desktop.

## Services

Check `/uslugi` and its service pages:

- `/uslugi/projektowanie-wnetrz`
- `/uslugi/uslugi-budowlane`
- `/uslugi/remont-pod-klucz`

- [ ] Horizontal spacing is more consistent between headings, descriptions, and cards.
- [ ] **„Zakres pakietu Smart / Comfort / Prestige”** opens a bottom drawer.
- [ ] Each drawer shows the full package contents from Figma.
- [ ] Drawers scroll, close correctly, and restore page scrolling.
- [ ] Plus icons appear on the right side.
- [ ] The updated **„Przestrzeń przygotowana na nowy rozdział”** section matches Figma, including its hallway photo and responsive layout.
- [ ] On `/uslugi/remont-pod-klucz`, process numbers **01–04** never split across lines on mobile.

## Footer — all pages

- [ ] The same correct logo appears on every page.
- [ ] **„Od pierwszej rozmowy do ostatniego detalu.”** remains.
- [ ] **„Porozmawiajmy o Twoim wnętrzu”** fits on one line on desktop.
- [ ] Footer navigation includes the main pages and all three service pages.
- [ ] Copyright, company information, and the blog link remain.
- [ ] Mobile spacing, wrapping, and links look good.

## Mobile menu

- [ ] Blog and **„O nas”** are removed from the menu and remain accessible through the footer.
- [ ] The menu contains Home, Services, Portfolio, and Contacts.

## Portfolio

- [ ] All project photos are visible without an expand button.
- [ ] Gallery photos retain their original proportions in a masonry layout.
- [ ] Duplicate featured crops are removed.
- [ ] Clicking a photo opens the improved viewer.
- [ ] Mobile swipe, navigation buttons, photo counter, and close controls work.
- [ ] Desktop keyboard navigation works.
- [ ] Closing the viewer restores scrolling and focus.
- [ ] **„Mieszkanie przy Gdańskiej”** appears last in the portfolio listing.
- [ ] The facts strip shown in the reference screenshot is removed.

## Contact — `/contacts`

- [ ] The initial information-and-form layout is centered on desktop.
- [ ] Review step hides the left information section.
- [ ] Review data appears in a centered panel.
- [ ] **„Popraw dane”** restores the form and preserves entered values.
- [ ] Validation, sending errors, and retry behavior still work.

## Shared action arrows

- [ ] Action arrows across buttons, text links, project cards, and footer links use the consistent SVG shape exported from Figma.

## Latest UI refinements

- [ ] Hero autoplay advances every six seconds and continues after dot selection or swipe, without a play/pause button.
- [ ] Package drawers use a centered SVG close icon instead of a text glyph.
- [ ] Hero controls show equal-sized circular dots with only opacity distinguishing the active slide; no pill background, stretched marker, arrows, or play/pause controls.
- [ ] Text links such as **„Zobacz portfolio”** align vertically with their primary buttons on desktop; service actions stack cleanly on mobile. Check similar action groups on service, about, and confirmation pages.
- [ ] Mobile menu has a larger circular SVG close button, vertically centered main navigation, and phone, email, and inquiry button at the bottom. Check both short and tall screens.

## Verification notes

- Responsive and interaction checks passed in agent-browser.
- The mobile process-number fix was checked at 360, 390, 430, 768, and 1440px.
- The border fix still needs checking on a real iPhone/Safari; the local iOS simulator runtime was unavailable.
- Form delivery tests used mocked requests, so no real leads were sent.

## Review notes

Record any remaining issues here, including the route, screen size, and expected behavior.

_No review notes yet._
