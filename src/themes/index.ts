export default {
  COLORS: {
    WHITE: '#FFFFFF',
    BLACK: '#000000',

    RED_DARK: '#BF3B44',
    RED_MID: '#F3BABD',
    RED_LIGHT: '#F4E6E7',

    GREEN_DARK: '#639339',
    GREEN_MID: '#CBE4B4',
    GREEN_LIGHT: '#E5F0DB',

    GRAY_7: '#FAFAFA',
    GRAY_6: '#EFF0F0',
    GRAY_5: '#DDDEDF',
    GRAY_4: '#B9BBBC',
    GRAY_3: '#808080',
    GRAY_2: '#333638',
    GRAY_1: '#1B1D1E',
  },

  FONT_FAMILY: {
    REGULAR: 'NunitoSans_400Regular',
    BOLD: 'NunitoSans_700Bold',
  },
  FONT_SIZE: {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
    '2XL': 32,
  },
} as const

export type COLORS_TYPE =
  | 'WHITE'
  | 'BLACK'
  | 'RED_DARK'
  | 'RED_MID'
  | 'RED_LIGHT'
  | 'GREEN_DARK'
  | 'GREEN_MID'
  | 'GREEN_LIGHT'
  | 'GRAY_7'
  | 'GRAY_6'
  | 'GRAY_5'
  | 'GRAY_4'
  | 'GRAY_3'
  | 'GRAY_2'
  | 'GRAY_1'

export type SIZE_TYPE = 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | '2XL'
