import type { TextUsage, TextColor } from '../types';
import { DOCUMENT_VARIANTS, INTERFACE_VARIANTS } from './constants';
import buildTextColorForInterface from './build-text-color-for-interface';
import buildTextColorForDocument from './build-text-color-for-document';

const returnTextColor = (as: TextUsage, color: TextColor) => {
  if (DOCUMENT_VARIANTS.includes(as)) {
    return buildTextColorForDocument(as);
  }
  if (INTERFACE_VARIANTS.includes(as)) {
    return buildTextColorForInterface(color);
  }

  throw new Error("'as' or 'color' props does not have a valid value");
};

export default returnTextColor;
