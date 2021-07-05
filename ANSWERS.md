## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    When we get data, often it comes from APIs, and we may not have configured them or there could be errors in the data. Javascript is really forgiving, and sometimes will try accepting properties that can ruin an app. PropTypes allow us to make sure that when we pass in props they follow the format we want. If they don't have that format then we want to know by getting errors in the console so we can resolve the problem.

- [ ] Describe a life-cycle event in React?

    Birth/Mounting: The component is being built. A constructor will hold your initial data and the component will render that using a render method.
    ComponentDidMount gets called as well.
    Growth/Updating: A component is going to keep attempting to rerender unless we tell it render. We can tell component when to setState or render in this phase.
    Death/Un-mounting: Component dies and cleans up whatever needs to be cleaned up. For example, a counter may need to killed from a component so that when a user exits the component and returns the counter will be a new one that would be mounted or born separately.

- [ ] Explain the details of a Higher Order Component?

    In Javascript a function can take in a function as an argument. Similarly, a function can take in a whole component as an argument and return a new component. This can be used for authentication among other things.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

    import a stylesheet from a css file
    inline styling (add style={} and pass in your style)
    reactstrap (allows you to pass in props as well and make the styling dynamic with props)
    Joe says we can use LESS as well...but he could be all talk...kidding!

