// Menu data extracted from brief
const MENU = {
  coffee: {
    name: "Coffee",
    subtitle: "Single-origin beans, pulled with love",
    items: [
      { n: "Classic Cold Coffee", p: 180, d: "Iced, sweet, nostalgic. The one you grew up on.", tag: "classic" },
      { n: "Hazelnut Cold Coffee", p: 220, d: "Cold brew swirled with house-made hazelnut syrup.", tag: "sweet" },
      { n: "Vietnamese Cold Coffee", p: 240, d: "Condensed milk, strong dark roast, served over ice.", tag: "bold" },
      { n: "Iced Americano", p: 160, d: "Double espresso + cold water + ice. Clean & direct.", tag: "black" },
      { n: "Hot Americano", p: 150, d: "Espresso diluted. Honest coffee, nothing hiding.", tag: "black" },
      { n: "Cappuccino", p: 170, d: "Equal thirds — espresso, milk, foam. The rulebook.", tag: "milky" },
      { n: "Signature Latte", p: 210, d: "Our house blend, silky milk, a whisper of jaggery.", tag: "hero", hero: true },
      { n: "Mocha", p: 220, d: "Espresso, dark chocolate ganache, steamed milk.", tag: "sweet" },
      { n: "South Filter Coffee", p: 120, d: "Decoction + boiled milk. Steel tumbler theatre.", tag: "classic", hero: true },
    ]
  },
  sips: {
    name: "Other Sips",
    subtitle: "For the non-coffee crowd",
    items: [
      { n: "Hot Chocolate", p: 180, d: "Melted dark chocolate, whole milk, a tiny pinch of salt." },
      { n: "503 Mint", p: 140, d: "Fresh mint, lime, sparkling. Our house signature.", hero: true },
      { n: "Fresh Lime", p: 90, d: "Sweet, salted, or soda — you call it." },
      { n: "Chai", p: 80, d: "Cardamom-forward, ginger kick, Assam base." },
      { n: "Oreo Shake", p: 220, d: "Cookies blended in, cookies on top." },
      { n: "Chocolate Thickshake", p: 230, d: "Belgian cocoa, vanilla ice cream, ribbons of fudge." },
      { n: "503 Vanilla", p: 200, d: "Bourbon vanilla shake, just enough sweet.", hero: true },
    ]
  },
  waffles: {
    name: "Waffles & Toasts",
    subtitle: "Pressed fresh, served warm",
    items: [
      { n: "Classic Waffle", p: 180, d: "Maple syrup, butter, powdered sugar." },
      { n: "Chocolate Waffle", p: 220, d: "Molten chocolate, choco-chip crunch." },
      { n: "Hazelnut Waffle", p: 240, d: "Nutella drizzle, toasted hazelnuts, sea salt.", hero: true },
      { n: "Honey Waffle", p: 200, d: "Raw forest honey, a splash of cream." },
      { n: "Classic French Toast", p: 210, d: "Cinnamon, vanilla, slow-griddled till golden." },
      { n: "Nutella Sandwich", p: 180, d: "Grilled, gooey, unapologetic." },
      { n: "Bun Maska", p: 80, d: "Buttered bun, Irani style. Dunk it in chai.", hero: true },
    ]
  },
  sandwiches: {
    name: "Sandwiches",
    subtitle: "Grilled, stacked, sliced diagonally",
    items: [
      { n: "Chicken Club Sandwich", p: 280, d: "Triple-decker, pulled chicken, bacon, herbs." },
      { n: "Veg Classic Sandwich", p: 180, d: "Cucumber, tomato, beets, cheese, chutney." },
      { n: "Paneer Sandwich", p: 210, d: "Masala paneer, caramelised onions." },
      { n: "Bombay Sandwich", p: 200, d: "Potato, chutney, the whole streetside dream.", hero: true },
      { n: "Egg Sando", p: 190, d: "Japanese-style creamy egg salad." },
      { n: "Cheese Melt", p: 180, d: "Three cheeses, slow-pressed till crisp." },
      { n: "Chilli Cheese Toast", p: 170, d: "Green chilli, cheddar, pepper, open-faced." },
      { n: "Garlic Bread", p: 140, d: "Butter, garlic confit, parsley." },
    ]
  },
  mains: {
    name: "Mains & Bites",
    subtitle: "For when coffee needs company",
    items: [
      { n: "Chicken Burger", p: 260, d: "Crispy patty, brioche, house sauce, pickles.", hero: true },
      { n: "Veg Burger", p: 220, d: "Beetroot-walnut patty, smoked mayo." },
      { n: "Paneer Classic", p: 230, d: "Spiced paneer slab, lettuce, mint mayo." },
      { n: "Cream Pasta", p: 260, d: "Penne, garlic cream, parmesan, cracked pepper." },
      { n: "Red Pasta", p: 250, d: "Slow-cooked tomato, basil, chilli flakes." },
      { n: "Classic Mac", p: 240, d: "Four-cheese, breadcrumb crust." },
      { n: "Classic Fries", p: 140, d: "Sea salt. Fat cut. Hot." },
      { n: "Chilli Fries", p: 170, d: "Tossed with green chilli, garlic, curry leaves." },
      { n: "Chicken Bites", p: 220, d: "Marinated overnight, fried to order." },
      { n: "Crispy Chicken", p: 240, d: "Buttermilk-brined, double-breaded." },
      { n: "Pepper Cheese", p: 180, d: "Molten cheese balls, black pepper crust." },
      { n: "Corn & Cheese", p: 170, d: "Sweet corn, mozzarella, jalapeño." },
      { n: "Chicken Strips", p: 230, d: "Herbed panko, house dip." },
    ]
  },
};

const MENU_SECTIONS = Object.keys(MENU);

window.MENU = MENU;
window.MENU_SECTIONS = MENU_SECTIONS;
