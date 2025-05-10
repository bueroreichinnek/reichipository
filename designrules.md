## Design-Richtlinien

### Farben

- **Primärfarben:**  
  - Rot: `#FF0000`  
  - Weiß: `#FFFFFF`
- **Sekundärfarben (Farbpaare):**  
  - `#FF0000` + `#6F003C`
  - `#004B5B` + `#00B19C`
  - `#8100A1` + `#D675D8`
  - `#2E4FC4` + `#D4D4FF`
- ** Alle Farben:**
--die-linke-rot: #F00;
    --dunkelrot: #6F003C;
    --friedensblau: #2E4FC4;
    --violett: #8100A1;
    --tuerkis: #00B19C;
    --blassviolett: #D4D4FF;
    --rosa: #D675D8;
    --white: #FFF;
    --off-white: #F8F8F8;
    --light-grey: #E1E1E1;
    --medium-grey: #616161;
    --petrol: #004B5B;
    --petrol-dark: #002932;
    --active-mint: #ABEAE2;
    --ui-black: #212121;
- **Grautöne:** Verschiedene Abstufungen von Schwarz und Weiß sind erlaubt.
- **Nicht zulässige Farbkombinationen:**  

Hintergrund `#FF0000`, Schrift `#000000`
Hintergrund `#6F003C`, Schrift `#000000`
Hintergrund `#00B19C`, Schrift `#FFFFFF`
Hintergrund `#004B5B`, Schrift `#000000`
Hintergrund `#8100A1`, Schrift `#000000`
Hintergrund `#D4D4FF`, Schrift `#FFFFFF`
Hintergrund `#2E4FC4`, Schrift `#000000`

Sollten Farben sich überlagern, die einer nicht zulässigen Farbkombination angehören, fahre nicht fort, sondern frage Nutzer nach Bestätigung. Gleiches gilt für die Anwendung von Farben, die NICHT zu Primär- oder Sekundärfarben gehören.


### Typografie

- **Headlines:** "Work Sans" (Black & Light)
- **Subheadlines:** "Work Sans" (Light, kleinere Größe)
- **Fließtext:** "Inter" (Regular, Bold, Italic, Medium)
- **Informationshierarchie:** Klare Kontraste und Weißraum für Lesbarkeit

Der Schnitt "Black" kann um den Schnitt "Light" ergänzt oder mit einem farbigen Banner hinterlegt werden. In Print-Anwendungen steht der Schriftgrößenkontrast zwischen Headlines, Subheadlines und Fließtext im Vordergrund, um eine klare Informationshierarchie zu gewährleisten. Die Headlines werden in einer engen Zeilenhöhe gesetzt, das erzeugt ein kompaktes Schriftbild.

Spacing for headings is be -3%.
Line height for h1, h2, h3 is *1.3, for h4, h5, h6 *1.2, for body text *1.5.

## Custom CSS Elements (added)

### .tagline
- For short, prominent taglines or subtitles.
- Uses Work Sans, 18px, weight 300, petrol color.

### .card-title .h6
- For card titles styled as h6.
- Work Sans, 20px, weight 900, die-linke-rot color, margin-bottom 12px.

### .frame-type-accordion
- For accordion containers, width 327px.
- Headings inside use Work Sans, bold, petrol color, responsive font size.
- Subheadings and adjacent headings have specific font sizes and weights.
- Accordion items have no border/background, and expanded/hovered states use die-linke-rot.
- Accordion body uses Inter, 15px, ui-black color, 48px margin-bottom.

See `globals.css` for full implementation details and responsive rules.
