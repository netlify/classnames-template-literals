# classnames-template-literals

Utility originally created to deal with long Tailwind classnames.

To make our code more readable, we extract our Tailwind classes into variables, for example:

```javascript
const twClasses = `
  tw-sr-only 
  focus:tw-not-sr-only 
  tw-bg-teal-darker 
  tw-text-white 
  tw-block
  tw-text-sm
  tw-l-0
`;
```

The issue with writing classes this way is that they are rendered as-is in the DOM.

Example:

```javascript
<p
  class="
  tw-sr-only
  focus:tw-not-sr-only
  tw-bg-teal-darker
  tw-text-white
  tw-block
  tw-text-sm
  tw-l-0"
>
  Hello world
</p>
```

Using the `ctl` util formats classnames so they are rendered in a more standard way in the DOM.

Example:

```javascript
<p class="tw-sr-only focus:tw-not-sr-only tw-bg-teal-darker tw-text-white tw-block tw-text-sm tw-l-0">
  Hello world
</p>
```

## Installation

```javascript
npm install @netlify/classnames-template-literals
```

## Usage

Wrap your classnames inside `ctl`.

```javascript
import ctl from "@netlify/classnames-template-literals";

const buttonClasses = ctl(`
    bg-black
    text-white
    p-1
    rounded-sm
`);
```

You can also use conditional classes:

```javascript
import ctl from "@netlify/classnames-template-literals";

const buttonClasses = ctl(`
    bg-black
    text-white
    p-1
    rounded-sm
    ${someState && "bg-pink"}
`);
```
