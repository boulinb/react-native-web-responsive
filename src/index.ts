import { useWindowDimensions } from 'react-native';
import { IResponsive } from './types';

export enum ResponsiveType {
  XXS,
  XS,
  S,
  SM,
  MD,
  LG,
  XL
}

const ValueOfResponsiveType = {
  [ResponsiveType.XXS]: 320,
  [ResponsiveType.XS]: 360,
  [ResponsiveType.S]: 400,
  [ResponsiveType.SM]: 576,
  [ResponsiveType.MD]: 768,
  [ResponsiveType.LG]: 992,
  [ResponsiveType.XL]: 1200,
}

const getCurrentValue = (width: number, values: Array<IResponsive>) => {
  const v = values.filter((v) => Boolean(((ValueOfResponsiveType?.[v.type] || v.type) <= width)));

  if (!v?.length) {
    return null;
  }

  return v.reduce((prev, current) => ((ValueOfResponsiveType?.[prev.type] || prev.type) > (ValueOfResponsiveType?.[current.type] || current.type)) ? prev : current)
}

const getMinValue = (values: Array<IResponsive>) => {
  return values
    .reduce((prev, current) => ((ValueOfResponsiveType?.[prev.type] || prev.type) < (ValueOfResponsiveType?.[current.type] || current.type)) ? prev : current)
}

export const useResponsive = () => {
  const { width } = useWindowDimensions();

  const responsiveValue = (values: Array<IResponsive>) : number => {
    let value = getCurrentValue(width, values);

    if (!value && values?.length) {
      value = getMinValue(values);
    }

    return value?.value || 0;
  }

  return {
    responsiveValue
  }
}
