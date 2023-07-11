let height = null;
let width = null;

// важно: используйте круглые скобки
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// без скобок
let area = height ?? 100 * width ?? 50;

// ...сработает вот так (совсем не как нам нужно):
let area = height ?? (100 * width) ?? 50;

// будет height=100, если переменная height равна null или undefined
height = height ?? 100;