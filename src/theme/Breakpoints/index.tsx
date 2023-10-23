interface Values {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const values: Values = {
  xxs: 0,
  xs: 420,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export interface Breakpoints {
  values: Values;
  keys: (keyof Values)[];
  up: (key: keyof Values) => string;
  down: (key: keyof Values) => string;
  between: (start: keyof Values, end: keyof Values) => string;
  only: (key: keyof Values) => string;
  not: (key: keyof Values) => string;
  unit: 'px' | 'em' | 'rem';
}

export const breakpoints: Breakpoints = {
  values,
  keys: [...Object.keys(values)] as (keyof Values)[],
  up: (key: keyof Values) => {
    if (key in values) {
      return `@media (min-width:${values[key as keyof Values]}px)`;
    }
    return ''; // Handle the case where the key is not found
  },
  down: (key: keyof Values) => {
    if (key in values) {
      return `@media (max-width:${values[key as keyof Values]}px)`;
    }
    return ''; // Handle the case where the key is not found
  },
  between: (start: keyof Values, end: keyof Values) => {
    const minValue = values[start as keyof Values];
    const maxValue = values[end as keyof Values];
    if (minValue && maxValue) {
      return `@media (min-width:${minValue}px) and (max-width:${maxValue}px)`;
    } else if (minValue && !maxValue) {
      return `@media (min-width:${minValue}px) and (min-height:${maxValue}px)`;
    } else if (!minValue && maxValue) {
      return `@media (max-width:${minValue}px) and (max-height:${maxValue}px)`;
    }
    return ''; // Handle the case where the values are not found
  },
  only: (key: keyof Values) => {
    const index = breakpoints.keys.indexOf(key);
    const nextKey = breakpoints.keys[index + 1];
    if (key in values) {
      return nextKey ? breakpoints.between(key, nextKey) : breakpoints.up(key);
    }
    return ''; // Handle the case where the key is not found
  },
  not: (key: keyof Values) => `@media (not ${breakpoints.up(key)})`,
  unit: 'px',
};
