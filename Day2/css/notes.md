## 1. Box Model & Sizing  
- **Content → Padding → Border → Margin** — The fundamental box structure.  
- **`box-sizing: border-box;`**: Includes padding and border inside width/height (easier sizing control).

---

## 2. Display & Positioning  
- **`display`**: Controls layout behavior:
  - `block`, `inline`, `none`, `flex`, `grid`
- **`position`**:
  - `static` (default)
  - `relative` (offset without removing from flow)
  - `absolute` (positioned relative to nearest positioned ancestor)
  - `fixed` (fixed relative to viewport)
  - `sticky` (mix of static + fixed)

---

## 3. Spacing  
- **`padding`**: Space *inside* the border  
- **`margin`**: Space *outside* the border  
- Use logical shorthands:
  - `padding: 10px 20px;` → top/bottom = 10px, left/right = 20px
  - `margin: 5px;` sets all sides

---

## 4. Layout Tools  
### Flexbox (1D layout)
- Apply `display: flex;` to container  
- Key properties:
  - `flex-direction: row | column`
  - `justify-content`: align items along main axis
  - `align-items`: align along cross axis
  - `flex-wrap`: allow wrapping
  - Item-specific: `flex`, `order`, `align-self`

### Grid (2D layout)
- Apply `display: grid;`  
- Define structure:
  - `grid-template-columns`, `grid-template-rows`, `gap`
  - Place items with `grid-area`, `justify-items`, `align-items`

---

## 5. Typography & Color  
- Font properties:
  - `font-family`, `font-size`, `font-weight`, `line-height`
- Colors & backgrounds:
  - `color`, `background-color`, `background-image`
  - `background-size`, `background-position`

---

## 6. Borders & Shapes  
- **`border`**: width, style, color  
- **`border-radius`**: rounded corners (e.g., `8px`, or `50%` for circles)  
- **`box-shadow`**: drop shadows for depth

---

## 7. Effects & Interactivity  
- **`transform`**: `scale()`, `rotate()`, `translate()`  
- **`transition`**: Smooth animation of changing CSS  
- **Pseudo-classes**: `:hover`, `:active`, `:focus` for interactivity

---

## 8. Selectors & Specificity  
- **Selectors**:
  - Element (`h1`), class (`.box`), ID (`#header`), pseudo (`:hover`)
- **Specificity hierarchy**: Inline > ID > Class > Tag  
- **Comments** allow toggling styles quickly:
