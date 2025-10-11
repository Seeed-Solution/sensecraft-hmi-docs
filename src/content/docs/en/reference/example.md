---
title: API Reference Example
description: SenseCraft HMI API reference documentation example
---

# API Reference Example

This is an example page of SenseCraft HMI API reference documentation.

## Core API

### Initialization

```javascript
import { SenseCraftHMI } from 'sensecraft-hmi';

const hmi = new SenseCraftHMI({
  // Configuration options
});
```

### Methods

#### `init()`

Initialize the HMI system.

**Parameters:**
- `config` (Object): Configuration object

**Returns:**
- `Promise<void>`

**Example:**
```javascript
await hmi.init({
  theme: 'dark',
  language: 'en'
});
```

#### `render()`

Render the HMI interface.

**Parameters:**
- `component` (Component): Component to render

**Returns:**
- `HTMLElement`

## Event System

### Event Listening

```javascript
hmi.on('userAction', (data) => {
  console.log('User action:', data);
});
```

### Event Emission

```javascript
hmi.emit('customEvent', {
  type: 'buttonClick',
  timestamp: Date.now()
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | 'light' | Theme mode |
| `language` | string | 'en' | Interface language |
| `debug` | boolean | false | Debug mode |

## More Information

- [Quick Start Guide](/en/guides/example/)
- [GitHub Repository](https://github.com/Seeed-Studio/sensecraft-hmi-docs)
