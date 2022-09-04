## component-builder-plugin

<p>
A component builder plugin for snowpack.
</p>

## Installing

```

  yarn add -D @novalua/component-builder-plugin

```

## Usage

- Add the plugin to your snowpack configuration file:

snowpack.config.mjs

```js
export default {
  plugins: ["@novalua/component-builder-plugin"],
}
```

- Create a template for your html file inside the **public** folder

public/template.html

```html
<!DOCTYPE html>
<html>
  <body>
    <main>{example}</main>
  </body>
</html>
```

- Add your index html file:

public/index.html

```html
<!DOCTYPE html>
<html>
  <body></body>
</html>
```

- Create your components:

Every component should sit inside the **src/components** folder, with the same name as it's folder.

src/components/example/example.html

```html
<div>I am an example component 😎</div>
```

## Bug report

Found any bug? please open an [issue](https://github.com/NOVALUAtech/component-builder-plugin/issues)
