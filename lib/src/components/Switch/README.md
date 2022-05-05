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

##### Toggle switch

```html
<div className="App">
  <Switch status={stateVariable} onChange={setStateVariable} />
</div>
```

##### Toggle switch off state

![Switch](https://i.imgur.com/jeJP03s.png)

##### Toggle switch on state

![Switch](https://i.imgur.com/vFgYBym.png)

---

##### Disabled switch

```html
<div className="App">
  <Switch status={stateVariable} onChange={setStateVariable} isDisabled={true}/>
</div>
```
##### Disabled switch off state

![Switch](https://i.imgur.com/XNRGr2e.png)

##### Disabled switch on state

![Switch](https://i.imgur.com/Ffyalpo.png)