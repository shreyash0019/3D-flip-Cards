# 3D-flip-Cards


This project implements a **3D Flip Card Gallery** using HTML, CSS, and JavaScript. The gallery displays a collection of cards that rotate on hover, providing a visually engaging user experience. The layout uses a flexbox design to arrange the cards, and CSS is used to create the 3D flip effect when hovering over a card. The gallery is responsive, ensuring that the content remains properly displayed within the viewport.

## Features

- **3D Flip Effect**: The cards flip and scale when hovered over, giving a dynamic 3D effect.
- **Flexbox Layout**: The cards are arranged in a row using Flexbox, making the gallery flexible and adaptable.
- **Responsive Design**: The gallery adjusts its size to fit within the screen using percentage-based widths and max-height, preventing overflow.
- **Interactive Cards**: Each card has a background image and is visually interactive when hovered over.

## Technologies Used

- **HTML**: Used to structure the page and create the list of items.
- **CSS**: Used for styling the gallery, applying 3D transformations, and adding the hover effects.
- **JavaScript**: Used for dynamically managing the gallery’s behavior.

## How to Use

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser to view the gallery.
3. Customize the images and add more cards by modifying the `.item` elements in the HTML file.
4. Modify the CSS styles to adjust the layout, size, or hover effects as needed.

## Customization

- You can change the background images of the cards by updating the `background-image` URLs in the CSS file under the `.item:nth-of-type(X)` selectors.
- The size of the cards can be adjusted by modifying the `width` and `aspect-ratio` properties in the `.item` class.
- If you want to add more cards, simply copy the existing `<li class="item"></li>` elements and add them to the `.list` in the HTML file.


