# Documentation

# Button

### Quick start

Here's a quick start guide to get started with the button component

| Attributes |                         Values                          | Optional ? |
| :--------- | :-----------------------------------------------------: | ---------: |
| variant    | `default` &#124; `light` &#124; `ghost` &#124; `hallow` |        Yes |
| padding    |         `small` &#124; `medium` &#124; `large`          |        Yes |
| fontSize   |         `small` &#124; `medium` &#124; `large`          |        Yes |
| margin     |         `small` &#124; `medium` &#124; `large`          |        Yes |
| onClick    |                      `() => void;`                      |        Yes |
| onHover    |                      `() => void;`                      |        Yes |
| ref        |             `RefObject<HTMLButtonElement>;`             |        Yes |

### Code Snippets and Examples

##### Button Default

```html
<div className="App">
  <button>Button default</button>
</div>
```

![Button](https://i.imgur.com/BeBATSh.jpg)

---

##### Button Light

```html
<div className="App">
  <button variant="light">Button light</button>
</div>
```

![Button](https://i.imgur.com/iGIVhXN.jpg)

---

##### Button Ghost

```html
<div className="App">
  <button variant="ghost">Button ghost</button>
</div>
```

![Button](https://i.imgur.com/AbrmEdn.jpg)

---

##### Button Hallow

```html
<div className="App">
  <button variant="hallow">Button Hallow</button>
</div>
```

![Button](https://i.imgur.com/iPfqa7x.jpg)

---
