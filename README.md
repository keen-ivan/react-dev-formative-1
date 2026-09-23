# Dev Insights - React Mini Blog

## Overview

Dev Insights is a small internal mini blog application built with React and TypeScript. The application allows employees to view short web development tips, insights, and updates.

This project was created as part of the React Formative 1 assessment.

The application demonstrates reusable React components, TypeScript interfaces, conditional styling, component optimization with `React.memo`, and a custom Higher-Order Component (HOC).

---

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- ESLint/Oxlint

---

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Post.tsx
│   └── PostList.tsx
├── hoc/
│   └── withLogger.tsx
├── styles/
│   └── App.css
├── types/
│   └── post.ts
├── App.tsx
├── index.css
└── main.tsx
```

### Main Files

**`App.tsx`**

The root component of the application. It combines the `Header` and `PostList` components.

**`Header.tsx`**

Displays the application header and navigation.

**`PostList.tsx`**

Contains the sample blog post data and renders the individual posts.

**`Post.tsx`**

A reusable component responsible for displaying an individual blog post.

**`post.ts`**

Contains the TypeScript interface used to define the structure of a blog post.

**`withLogger.tsx`**

Contains the custom Higher-Order Component used to log component mounting and unmounting.

**`App.css`**

Contains the main styling for the application.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/keen-ivan/react-dev-formative-1.git
```

Move into the project directory:

```bash
cd react-dev-formative-1
```

Install the project dependencies:

```bash
npm install
```

---

## Running the Application

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local URL, normally:

```text
http://localhost:5173/
```

Open the URL in a web browser to view the application.

---

## Testing and Verification

The project can be checked using the following commands.

### Run the linter

```bash
npm run lint
```

This checks the project for code quality and linting issues.

### Create a production build

```bash
npm run build
```

This verifies that the application can be successfully compiled for production.

The application was also tested in the browser to verify that the header, blog posts, conditional `NEW!` badge, styling, and component rendering work correctly.

---

## Component Design

### Header

The `Header` component is a functional React component.

It displays the name of the application and the navigation link.

A functional component was used because the header only needs to display UI and does not require class-based lifecycle methods.

### PostList

The `PostList` component contains the sample post data.

It uses JavaScript's `map()` method to create a reusable `Post` component for each post.

Each rendered post receives a unique `key` based on its `id`.

### Post

The `Post` component is a reusable functional component that receives a typed post object through props.

The component displays:

- Post title
- Author
- Content
- Date
- Conditional `NEW!` badge

A functional component was chosen because the `Post` component primarily receives data through props and displays that data. A class component would add unnecessary complexity for this use case.

Functional components also work naturally with modern React features such as hooks.

### App

The `App` component acts as the root component of the application.

It brings the main components together by rendering the `Header` and `PostList`.

---

## TypeScript

The project uses TypeScript to define the structure of blog posts.

The `PostData` interface is located in:

```text
src/types/post.ts
```

The interface is:

```typescript
export interface PostData {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
  isNew?: boolean;
}
```

The interface defines the expected data type for every property of a post.

The `isNew` property is optional because not every post needs to be marked as new.

Using TypeScript interfaces helps provide type safety when passing post data between components.

---

## Styling

The application uses external CSS and inline styling.

### External CSS

The main application styling is contained in:

```text
src/styles/App.css
```

The stylesheet controls:

- Header styling
- Post cards
- Layout
- Colors
- Spacing
- Typography
- `NEW!` badge styling
- Conditional post styling

The global CSS file is:

```text
src/index.css
```

It provides the basic page-level styles and prevents the default Vite styling from interfering with the application design.

### Inline Styling

Inline styling is also used where appropriate within the React components.

This demonstrates how React supports different approaches to styling components.

---

## Conditional Styling

The application uses the optional `isNew` property to determine whether a post should be displayed as a new post.

For example:

```typescript
{
  id: 1,
  title: "Getting Started with React",
  author: "Mucyo Ivan",
  content: "React makes it easier to build reusable user interfaces.",
  date: "September 20, 2026",
  isNew: true
}
```

When `isNew` is `true`, the post displays a `NEW!` badge.

The post also receives conditional styling through its CSS class.

The conditional rendering is implemented using:

```tsx
{post.isNew && <span className="new-badge">NEW!</span>}
```

This means that the badge is only rendered when the post is marked as new.

---

## Optimization

The `Post` component uses `React.memo`.

```tsx
export default React.memo(Post);
```

`React.memo` allows React to skip re-rendering the component when its props have not changed.

This demonstrates a basic React optimization technique.

The project also uses unique keys when rendering the list of posts:

```tsx
<Post key={post.id} post={post} />
```

Using unique keys helps React identify individual elements in a list and efficiently update the UI when the list changes.

---

## Higher-Order Component

The project includes a custom Higher-Order Component called `withLogger`.

The HOC is located in:

```text
src/hoc/withLogger.tsx
```

The purpose of the HOC is to add logging behavior to an existing component without modifying the original component.

The logger records messages when the wrapped component mounts and unmounts.

For example, the browser console can display:

```text
PostList mounted
```

and when the component is removed:

```text
PostList unmounted
```

The HOC is applied to the `PostList` component.

This demonstrates how Higher-Order Components can be used to add reusable behavior to React components.

---

## Challenges

One challenge during development was a TypeScript file-name casing issue. The `Post` component file name and its import used different capitalization, which caused TypeScript to detect the same file as having different names.

The issue was resolved by making the file name and import use consistent capitalization.

Another challenge was the default Vite styling affecting the appearance of the application when the browser was using dark mode. Some text became difficult to read because the default Vite color scheme conflicted with the application's styles.

The issue was resolved by replacing the default global Vite styling with application-specific colors and explicitly defining the colors for the header, post cards, headings, and other text.

---

## Development Decisions

The project was intentionally divided into separate components instead of placing the entire application inside `App.tsx`.

This makes each component responsible for a specific part of the interface and makes the `Post` component reusable.

TypeScript was used to define the structure of post data and provide type safety when passing data through props.

Functional components were used throughout the application because they provide a simple approach for building the required UI and work naturally with modern React features.

`React.memo` was added to demonstrate component optimization, while the `withLogger` Higher-Order Component demonstrates how reusable behavior can be added to an existing component.

---

## Packages

The project was created using Vite with the React TypeScript template.

The main technologies and packages used include:

- React
- React DOM
- TypeScript
- Vite
- ESLint/Oxlint

No additional external UI framework was required for the application.

---

## GitHub Repository

The source code for this project is available here:

https://github.com/keen-ivan/react-dev-formative-1

---

## Author

**Mucyo Ivan**

React / TypeScript Formative Project