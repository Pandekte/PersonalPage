# My Personal Project

Welcome to my personal project page! This repository showcases my development journey, highlighting my skills and projects.

## Technologies Used

- **React:** Building a dynamic and responsive user interface.
- **JavaScript:** Core programming language for functionality.
- **Sass (SCSS):** Modular and maintainable styling.
- **ViteJS:** Fast and efficient development environment.
- **OpentypeJS:** Handling and animating custom fonts.
- **SortableJS:** Enabling drag-and-drop functionality within the project.
- **ARIA Attributes:** Ensuring accessibility and better user experience.
- **Animations:** Enhancing interactivity and visual appeal with Ferris Wheel animation and more.

Below, you'll find a detailed **Changelog** documenting all significant updates, along with the technologies used in this project.

## Changelog

All notable changes to this project are documented in this file.

### [0.1.5] - 2024-10-02

**Added**

- **Responsive Navigation:** Implemented functionality to hide the navigation bar on mobile and tablet devices using media queries.
- **Animated Arrow Button:** Added an animated arrow button to the Landing section for smooth scrolling to the Projects section.
- **Changelog Documentation:** Introduced Changelog to track all significant project updates.

**Changed**

- **Navigation Styling:** Enhanced the navigation bar with advanced hover effects, including scale transformation, box shadows, and icon animations for improved interactivity.
- **Project Cards Layout:** Modified the layout of project cards to display vertically on mobile and tablet devices for better readability and user experience.
- **Heading Responsiveness:** Adjusted heading sizes for tablet and mobile views to ensure optimal readability across different screen sizes.

**Fixed**

- **Sass Syntax Errors:** Resolved syntax issues in `variables.scss` to ensure proper compilation and functionality of media queries.
- **Icon Integration Issues:** Fixed issues with custom icons not displaying correctly in the `SkillsList` component, ensuring all skills have corresponding functional icons.

### [0.1.4] - 2024-10-01

**Added**

- **Navigation Component:** Developed the `Nav.jsx` component with basic navigation links (Home and Portfolio) using `react-scroll` for smooth scrolling.
- **Sass Styling:** Created `nav.scss` for styling the navigation bar, including layout and basic hover effects.

**Changed**

- **Project Structure:** Organized project files by introducing separate components and Sass files for better maintainability and scalability.

**Fixed**

- **Initial Setup:** Ensured all necessary dependencies and configurations are correctly set up for React and Sass integration.

### [0.1.3] - 2024-10-01

**Added**

- **Animated Headers:** Implemented animated headers using `opentype.js`, a JavaScript parser/writer for OpenType and TrueType fonts.
- **Intersection Observer:** Triggered animations when the `IntersectionObserver` is activated.

### [0.1.2] - 2024-10-01

**Added**

- **Centralized Heading Styles:** Created a dedicated `heading.scss` file to manage and maintain consistent styles for all heading components across the project.
- **Styled Heading Component:** Refactored the `<Heading>` component to utilize standard HTML heading elements (`<h1>` to `<h6>`) with enhanced SCSS styling for better consistency and maintainability.

**Changed**

- **Removed p5.js Dependency:** Eliminated the use of p5.js in the `<Heading>` component to simplify the rendering process and improve performance.
- **Updated SCSS Structure:** Organized SCSS files by introducing modular styling for components, ensuring better scalability and easier maintenance.
- **Refactored `<Heading>` Usage:** Updated all instances of the `<Heading>` component across various sections (e.g., Skills, About, Contact) to align with the new standardized styling and structure.

**Fixed**

- **Heading Display Issues:** Resolved the issue where headings were not displaying correctly by removing conflicting p5.js logic and ensuring proper SCSS imports and class assignments.
- **Responsive Design Enhancements:** Improved the responsiveness of heading elements to ensure they render appropriately across different screen sizes and devices.

### [0.1.1.2] - 2024-10-01

**Changed**

- **Navigation Update:** Updated navigation to include dropdowns in the main menu.

**Fixed**

- **Session Timeout:** Resolved an issue where user sessions expired too quickly by increasing the timeout duration.

### [0.1.1.1] - 2024-09-30

**Added**

- **Initial Release:** Launched the project with core components:
  - `<Skills>` component displaying a list of skills.
  - `<SkillsList>` component managing individual skill items.
  - Basic SCSS setup for styling components.

## Future Enhancements

Future updates will include more interactive features, enhanced accessibility options, and further optimizations to ensure the best possible user experience. The Changelog will continue to document every step of the project's evolution, making it easy to track progress and understand improvements over time.

---

Thank you for visiting my project page! Feel free to explore the projects, learn about my skills, and check out the detailed Changelog to see how this project has evolved.
