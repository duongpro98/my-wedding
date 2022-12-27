import colors from './colors';

export const MOTION_SPEED_BASE = 400;
export const TEXT_LINE_HEIGHT = 1.5;

export const FONT_FAMILY_DISPLAY = "'Helvetica Now Display', Helvetica, sans-serif";
export const FONT_FAMILY_TEXT = "'Helvetica Now Text', Helvetica, sans-serif";
export const FONT_FAMILY_MICRO =
  "'Helvetica Now Micro', 'Helvetica Now Text', Helvetica, sans-serif";

export interface IButtonColors {
  background: string;
  backgroundHover: string;
  border: string;
  borderHover: string;
  color: string;
  colorHover: string;
}

export interface ILinkColors extends IButtonColors {
  colorVisited: string;
  borderVisited: string;
  textDecoration: string;
}

export interface IColorSettings {
  all: {
    [key: string]: string;
  };
  element: {
    [key: string]: string;
  };
  background: {
    [key: string]: string;
  };
  status: {
    warning: string;
    error: string;
    info: string;
  };
  link: {
    primary: ILinkColors;
    primaryWithoutVisited: ILinkColors;
    secondary: ILinkColors;
    white: ILinkColors;
  };
  button: {
    primary: IButtonColors;
    secondary: IButtonColors;
    outline: IButtonColors;
    footerOutline: IButtonColors;
    white: IButtonColors;
    text: IButtonColors;
    tag: IButtonColors;
  };
  table: {
    head: {
      [key: string]: string;
    };
    cell: {
      [key: string]: string;
    };
    row: {
      [key: string]: string;
    };
  };
  form: {
    input: {
      [key: string]: string;
    };
    radio: {
      [key: string]: string;
    };
  };
  search: {
    focus: string;
    submit: {
      [key: string]: string;
    };
    border: string;
    filtersActive: string;
  };
  downloads: {
    border: string;
  };
  menu: {
    container: {
      background: string;
    };
    item: {
      background: string;
      backgroundActive: string;
      color: string;
      colorActive: string;
      description: string;
      descriptionActive: string;
    };
    divider: string;
  };
  modal: {
    container: {
      background: string;
    };
    scrollThumb: {
      background: string;
    };
    close: {
      fill: string;
      fillHover: string;
    };
  };
  footer: {
    container: {
      background: string;
    };
    item: {
      background: string;
      backgroundActive: string;
      color: string;
      colorActive: string;
    };
    tertiaryItem: {
      color: string;
    };
    divider: string;
  };
  featureList: {
    tick: string;
    cross: string;
  };
  dna: {
    default: string;
  };
}

export interface IFontSetting {
  fontSize: {
    [key: string]: number;
  };
  lineHeight: {
    [key: string]: number;
  };
  fontFamily: string;
  fontWeight?: string | number;
  spacing?: number;
  textTransform?: string;
}

export interface IFontSettings {
  headings: {
    title: IFontSetting;
    xxxl: IFontSetting;
    xxl: IFontSetting;
    xl: IFontSetting;
    l: IFontSetting;
    m: IFontSetting;
    s: IFontSetting;
    xs: IFontSetting;
  };
  text: {
    l: IFontSetting;
    m: IFontSetting;
    s: IFontSetting;
    xs: IFontSetting;
    xscap: IFontSetting;
  };
}

export interface IButtonSetting {
  fontSize: {
    [key: string]: number;
  };
  lineHeight: {
    [key: string]: number;
  };
  padding: {
    [key: string]: number;
  };
  icon: {
    [key: string]: {
      [key: string]: number;
    };
  };
  fontFamily: string;
  fontWeight?: string | number;
  borderRadius?: {
    [key: string]: {
      [key: string]: number;
    };
  };
}

export interface IButtonSettings {
  default: IButtonSetting;
  slim: IButtonSetting;
  iconOnly: IButtonSetting;
}

export interface IBorderRadiusSettings {
  default: {
    [key: string]: number;
  };
}

export interface ITableSettings {
  font: IFontSetting;
}

interface IMotionSetting {
  ease: string;
  timing: {
    [key: string]: string;
  };
}

export interface IGridSettings {
  margin: {
    [key: string]: number;
  };
  gutter: {
    size: { [key: string]: number };
    directions: string[];
  };
  colCount: number;
  containerMinWidth: number;
  containerMaxWidth: number;
  borderColor: string;
  borderWidth: string;
}

export interface IHeaderSettings {
  height: {
    xs: 72;
    md: 88;
  };
}

export interface IContentSettings {
  indent: {
    [key: string]: number;
  };
}

export interface ITheme {
  colors: IColorSettings;
  fonts: IFontSettings;
  buttons: IButtonSettings;
  borderRadius: IBorderRadiusSettings;
  table: ITableSettings;
  grid: IGridSettings;
  card: {
    sectionBackground: string;
    primary: string;
    secondary: string;
    action: string;
    actionHover: string;
    attributeIcon: string;
    borderRadius: number;
    boxShadow: string;
    boxShadowHover: string;
    border: string;
    borderHover: string;
    borderDashed: string;
    borderDashedHover: string;
  };
  accordion: {
    primary: string;
    action: string;
    actionHover: string;
    borderRadius: number;
    border: string;
    borderHover: string;
  };
  callToAction: {
    backgroundColor: string;
    color: string;
    borderRadius: number;
  };
  motion: IMotionSetting;
  responsiveSpacing: {
    [key: string]: {
      [key: string]: number;
    };
  };
  header: IHeaderSettings;
  content: IContentSettings;
}

const Theme: ITheme = {
  colors: {
    all: colors,
    element: {
      primary: colors.deepBlue,
      secondary: colors.green,
      tertiary: colors.greenTint110,
      quaternary: colors.deepBlueTint75,
      white: colors.white,
      black: colors.black,
      focused: colors.blueTint45,
      danger: colors.pottsPointRedTint110
    },
    background: {
      primary: colors.white,
      secondary: colors.light,
      tertiary: colors.blue,
      quaternary: colors.blueTint75,
      quinternary: colors.greenTint110,
      senary: colors.deepBlueTint07,
      octonary: colors.deepBlue,
      nonary: colors.blueTint110,
      disabled: colors.deepBlueTint07
    },
    status: {
      warning: '#ffc107',
      error: '#dc3545',
      info: '#b8daff'
    },
    link: {
      primary: {
        background: colors.transparent,
        backgroundHover: colors.green,
        border: colors.green,
        borderHover: colors.green,
        color: 'inherit',
        colorHover: colors.white,
        colorVisited: colors.darlinghurstPurple,
        borderVisited: colors.darlinghurstPurple,
        textDecoration: 'none'
      },
      primaryWithoutVisited: {
        background: colors.transparent,
        backgroundHover: colors.green,
        border: colors.green,
        borderHover: colors.green,
        color: 'inherit',
        colorHover: colors.white,
        colorVisited: 'inherit',
        borderVisited: colors.green,
        textDecoration: 'none'
      },
      secondary: {
        background: colors.transparent,
        backgroundHover: colors.transparent,
        border: colors.transparent,
        borderHover: colors.transparent,
        color: 'inherit',
        colorHover: colors.green,
        colorVisited: colors.darlinghurstPurple,
        borderVisited: colors.transparent,
        textDecoration: 'underline'
      },
      white: {
        background: colors.transparent,
        backgroundHover: colors.transparent,
        border: colors.transparent,
        borderHover: colors.transparent,
        color: 'inherit',
        colorHover: colors.white,
        colorVisited: colors.white,
        borderVisited: colors.transparent,
        textDecoration: 'underline'
      }
    },
    button: {
      primary: {
        background: colors.greenTint110,
        backgroundHover: colors.greenTint120,
        border: colors.greenTint110,
        borderHover: colors.greenTint120,
        color: colors.white,
        colorHover: colors.white
      },
      secondary: {
        background: colors.deepBlueTint07,
        backgroundHover: colors.deepBlueTint15,
        border: colors.deepBlueTint07,
        borderHover: colors.deepBlueTint15,
        color: colors.deepBlue,
        colorHover: colors.deepBlue
      },
      outline: {
        background: colors.white,
        backgroundHover: colors.white,
        border: colors.greenTint110,
        borderHover: colors.greenTint120,
        color: colors.greenTint110,
        colorHover: colors.greenTint120
      },
      text: {
        background: colors.transparent,
        backgroundHover: colors.transparent,
        border: colors.transparent,
        borderHover: colors.transparent,
        color: colors.greenTint110,
        colorHover: colors.greenTint120
      },
      tag: {
        background: colors.greenTint15,
        border: colors.transparent,
        color: colors.greenTint115,
        backgroundHover: colors.greenTint45,
        borderHover: colors.transparent,
        colorHover: colors.greenTint120
      },
      footerOutline: {
        background: colors.transparent,
        backgroundHover: colors.white,
        border: colors.white,
        borderHover: colors.white,
        color: colors.white,
        colorHover: colors.deepBlue
      },
      white: {
        background: colors.white,
        backgroundHover: colors.greenTint25,
        border: colors.white,
        borderHover: colors.greenTint25,
        color: colors.greenTint110,
        colorHover: colors.greenTint110
      }
    },
    table: {
      head: {
        color: colors.white,
        background: colors.greenTint110
      },
      cell: {
        border: colors.deepBlueTint15
      },
      row: {
        background: colors.white,
        backgroundAlt: colors.deepBlueTint07
      }
    },
    form: {
      input: {
        background: colors.deepBlueTint07,
        border: `2px solid ${colors.deepBlueTint45}`
      },
      radio: {
        background: colors.white,
        backgroundHover: colors.white,
        border: `2px solid ${colors.deepBlueTint45}`,
        borderHover: `2px solid ${colors.deepBlueTint75}`,
        selectedBackground: colors.greenTint110,
        selectedBackgroundHover: colors.greenTint120,
        selectedBorder: `2px solid ${colors.greenTint110}`,
        selectedBorderHover: `2px solid ${colors.greenTint120}`,
        color: colors.white,
        colorHover: colors.white
      }
    },
    search: {
      focus: colors.greenTint110,
      submit: {
        background: colors.deepBlueTint15
      },
      border: colors.deepBlueTint15,
      filtersActive: colors.greenTint15
    },
    downloads: {
      border: colors.deepBlueTint15
    },
    menu: {
      container: {
        background: colors.deepBlue
      },
      item: {
        color: colors.white,
        colorActive: colors.white,
        background: colors.transparent,
        backgroundActive: colors.greenTint110,
        description: colors.deepBlueTint45,
        descriptionActive: colors.white
      },
      divider: colors.deepBlueTint75
    },
    modal: {
      container: {
        background: colors.darkBlue
      },
      scrollThumb: {
        background: colors.deepBlueTint45
      },
      close: {
        fill: colors.white,
        fillHover: colors.green
      }
    },
    footer: {
      container: {
        background: colors.deepBlue
      },
      item: {
        color: colors.white,
        colorActive: colors.white,
        background: colors.transparent,
        backgroundActive: colors.greenTint110
      },
      tertiaryItem: {
        color: colors.deepBlueTint45
      },
      divider: colors.deepBlueTint45
    },
    featureList: {
      tick: colors.green,
      cross: colors.pottsPointRedTint110
    },
    dna: {
      default: colors.blueTint110
    }
  },
  fonts: {
    headings: {
      title: {
        fontSize: {
          sm: 56,
          md: 72
        },
        lineHeight: {
          sm: 56,
          md: 72
        },
        fontWeight: 300,
        fontFamily: FONT_FAMILY_DISPLAY
      },
      xxxl: {
        fontSize: {
          sm: 40,
          md: 64
        },
        lineHeight: {
          sm: 40,
          md: 64
        },
        fontFamily: FONT_FAMILY_DISPLAY
      },
      xxl: {
        fontSize: {
          sm: 32,
          md: 48
        },
        lineHeight: {
          sm: 32,
          md: 52
        },
        fontFamily: FONT_FAMILY_DISPLAY
      },
      xl: {
        fontSize: {
          sm: 24,
          md: 40
        },
        lineHeight: {
          sm: 28,
          md: 44
        },
        fontFamily: FONT_FAMILY_DISPLAY
      },
      l: {
        fontSize: {
          sm: 20,
          md: 32
        },
        lineHeight: {
          sm: 28,
          md: 36
        },
        fontFamily: FONT_FAMILY_DISPLAY
      },
      m: {
        fontSize: {
          sm: 18,
          md: 24
        },
        lineHeight: {
          sm: 22,
          md: 28
        },
        fontFamily: FONT_FAMILY_DISPLAY
      },
      s: {
        fontSize: {
          sm: 16,
          md: 18
        },
        lineHeight: {
          sm: 20,
          md: 24
        },
        fontFamily: FONT_FAMILY_DISPLAY
      },
      xs: {
        fontSize: {
          sm: 14,
          md: 16
        },
        lineHeight: {
          sm: 18,
          md: 20
        },
        fontFamily: FONT_FAMILY_DISPLAY
      }
    },
    text: {
      // large intro etc
      l: {
        fontSize: {
          sm: 20,
          md: 32
        },
        lineHeight: {
          sm: 24,
          md: 36
        },
        spacing: 16,
        fontWeight: 300,
        fontFamily: FONT_FAMILY_DISPLAY
      },
      // normal body
      m: {
        fontSize: {
          sm: 16,
          md: 18
        },
        lineHeight: {
          sm: 24,
          md: 28
        },
        spacing: 16,
        fontFamily: FONT_FAMILY_TEXT
      },
      // smaller body
      s: {
        fontSize: {
          sm: 14,
          md: 16
        },
        lineHeight: {
          sm: 18,
          md: 22
        },
        spacing: 16,
        fontFamily: FONT_FAMILY_TEXT
      },
      // small text
      xs: {
        fontSize: {
          sm: 10,
          md: 10
        },
        lineHeight: {
          sm: 16,
          md: 16
        },
        fontWeight: 'normal',
        spacing: 16,
        fontFamily: FONT_FAMILY_MICRO
      },
      // small text caps
      xscap: {
        fontSize: {
          sm: 10,
          md: 10
        },
        lineHeight: {
          sm: 16,
          md: 16
        },
        spacing: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: FONT_FAMILY_MICRO
      }
    }
  },
  buttons: {
    default: {
      // (same as h5)
      fontSize: {
        sm: 16,
        md: 18
      },
      lineHeight: {
        sm: 24,
        md: 28
      },
      padding: {
        x: 14,
        y: 6
      },
      icon: {
        sm: {
          w: 24,
          h: 24
        },
        md: {
          w: 24,
          h: 24
        }
      },
      fontFamily: FONT_FAMILY_TEXT
    },
    slim: {
      // (same as h6)
      fontSize: {
        sm: 14,
        md: 16
      },
      lineHeight: {
        sm: 16,
        md: 20
      },
      padding: {
        x: 14,
        y: 6
      },
      icon: {
        sm: {
          w: 20,
          h: 20
        },
        md: {
          w: 24,
          h: 24
        }
      },
      fontFamily: FONT_FAMILY_TEXT
    },
    iconOnly: {
      fontSize: {
        sm: 16,
        md: 16
      },
      lineHeight: {
        sm: 16,
        md: 16
      },
      padding: {
        x: 16,
        y: 16
      },
      icon: {
        sm: {
          w: 20,
          h: 20
        },
        md: {
          w: 24,
          h: 24
        }
      },
      fontFamily: FONT_FAMILY_TEXT
    }
  },
  borderRadius: {
    default: {
      sm: 10,
      md: 14
    }
  },
  table: {
    font: {
      // same as body2
      fontSize: {
        sm: 14,
        md: 16
      },
      lineHeight: {
        sm: 16,
        md: 20
      },
      spacing: 16,
      fontFamily: FONT_FAMILY_TEXT
    }
  },
  motion: {
    ease: 'cubic-bezier(.27,.23,.08,1)',
    timing: {
      none: `0ms`,
      fast: `${MOTION_SPEED_BASE / 2}ms`,
      default: `${MOTION_SPEED_BASE}ms`,
      slow: `${MOTION_SPEED_BASE * 2}ms`
    }
  },
  responsiveSpacing: {
    xs: {
      '0': 0,
      '1': 8,
      '2': 16,
      '3': 16,
      '4': 16,
      '5': 24,
      '6': 24,
      '7': 32,
      '8': 40,
      '9': 64
    },
    md: {
      '0': 0,
      '1': 8,
      '2': 16,
      '3': 24,
      '4': 32,
      '5': 40,
      '6': 48,
      '7': 64,
      '8': 80,
      '9': 120
    }
  },
  grid: {
    margin: {
      xs: 24,
      lg: 48
    },
    gutter: {
      size: {
        xs: 16,
        md: 24,
        lg: 32
      },
      directions: ['left', 'right', 'top', 'bottom']
    },
    colCount: 12,
    containerMinWidth: 280,
    containerMaxWidth: 1024,
    borderColor: colors.deepBlueTint15,
    borderWidth: '1px'
  },
  card: {
    sectionBackground: colors.light,
    primary: colors.deepBlue,
    secondary: colors.deepBlueTint75,
    action: colors.greenTint110,
    actionHover: colors.greenTint120,
    attributeIcon: colors.deepBlueTint75,
    borderRadius: 8,
    boxShadow: `0px 3px 12px ${colors.black10}`,
    boxShadowHover: `0px 6px 20px ${colors.black20}`,
    border: `1px solid ${colors.deepBlueTint15}`,
    borderDashed: `1px dashed ${colors.deepBlueTint15}`,
    borderHover: `1px solid ${colors.deepBlueTint45}`,
    borderDashedHover: `1px dashed ${colors.deepBlueTint45}`
  },
  accordion: {
    primary: colors.deepBlue,
    action: colors.greenTint110,
    actionHover: colors.greenTint120,
    borderRadius: 8,
    border: `1px solid ${colors.deepBlueTint15}`,
    borderHover: `1px solid ${colors.deepBlueTint45}`
  },
  callToAction: {
    backgroundColor: colors.greenTint110,
    borderRadius: 8,
    color: colors.white
  },
  header: {
    height: {
      xs: 72,
      md: 88
    }
  },
  content: {
    indent: {
      xs: 40,
      md: 48
    }
  }
};

export default Theme;
