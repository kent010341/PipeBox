# `range` Pipe  

## Problem  
In JavaScript, you can loop `n` times using:  
```js
for (let i = 0; i < n; i++) { ... }
```

However, **Angular does not support this syntax in templates**.  
Instead, you need to manually prepare an array in TypeScript, like this:  
```typescript
numbers = Array.from({ length: n }, (_, i) => i);
```

This approach is repetitive and clutters your component logic.

## Solution  
Use the `range` pipe to generate the array dynamically in `*ngFor`:

```html
<div *ngFor="let i of (5 | range)">{{ i }}</div>
<!-- Outputs: 0, 1, 2, 3, 4 -->
```

##  Features

- Supports `range(n)`, `range(start, stop)`, and `range(start, stop, step)`.
- Optimized for `range(n)`, using `Array.from()` for best performance.
- Works in `*ngFor` without modifying TypeScript code.

See [range.pipe.ts](./range.pipe.ts) for implementation details.
