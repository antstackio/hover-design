# Documentation

# Switch

### Quick start

Here's a quick start guide to get started with the button component

| Attributes |                     Values                      | Optional ? |
| :--------- | :---------------------------------------------: | ---------: |
| status     |                    `boolean`                    |         No |
| onChange   | `React.Dispatch<React.SetStateAction<boolean>>` |         No |
| isDisabled |                    `boolean`                    |        Yes |

### Code Snippets and Examples

##### Toggle switch on and off

```html
<div className="App">
  <Switch status="{stateVariable}" onChange="{setStateVariable}" />
</div>
```

![Switch](https://i.imgur.com/jeJP03s.png)

![Switch](https://i.imgur.com/vFgYBym.png)

---

##### Disabled switch on and off

```html
<div className="App">
  <Switch status="{stateVariable}" onChange="{setStateVariable}" isDisabled={true}/>
</div>
```

![Switch](https://i.imgur.com/XNRGr2e.png)

![Switch](https://i.imgur.com/ameer1x.png)