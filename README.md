# accordio

accordio is a very simple and basic accordion react component to be used in any react project. There is a basic style applied with minimal markup required to use.

## Installation

You can install accordio in your project using npm:

`npm install accordio`

## Usage

Then to use accordio you will need to import the different accordio components into the component that you require an accordion:

```
import 'accordio/accordio.css';
import {
  Accordio,
  AccordioItem,
  AccordioHeading,
  AccordioContent
} from 'accordio';
```

There are 4 components that build up the accordion as show in the above import, the structure that this follows in your component is:

```
<Accordio>
  <AccordioItem index={0}>
    <AccordioHeading>Heading</AccordioHeading>
    <AccordioContent>Content</AccordioContent>
  </AccordioItem>
</Accordio>
```

The `index` prop on `AccordioItem` is required as it is used to handle which item is open and what should get opened on click.

You can have as many `AccordioItem`'s as you want, just ensure each one contains the `AccordioHeading` and `AccordioContent` components.

### Recommendation

In the demo site, I have created a wrapper component that takes in an array of children that then gets looped over and creates an `AccordioItem` for each child. Avoids having to repeat yourself, which is always good and because of the loop, you automatically have the `index` prop that you can pass into it.

Here's what the code would look like:

```
<Accordio>
  {items.map((item, index) => (
    <AccordioItem key={index} index={index}>
      <AccordioHeading>{item.heading}</AccordioHeading>
      <AccordioContent>{item.content}</AccordioContent>
    </AccordioItem>
  ))}
</Accordio>
```
