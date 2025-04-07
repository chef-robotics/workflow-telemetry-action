// Configuration constants
export const UI_CONFIG = {
  FONT_FAMILY: 'Arial, Helvetica, sans-serif'
}

// Chart configuration defaults
export const CHART_DEFAULTS = {
  options: {
    width: 1000,
    height: 500,
    xAxis: {
      label: 'Time',
      fontFamily: UI_CONFIG.FONT_FAMILY
    },
    yAxis: {
      fontFamily: UI_CONFIG.FONT_FAMILY
    },
    timeTicks: {
      unit: 'auto'
    },
    fontFamily: UI_CONFIG.FONT_FAMILY
  }
}

// Mermaid chart defaults
export const MERMAID_DEFAULTS = {
  gantt: {
    dateFormat: 'x',
    axisFormat: '%H:%M:%S',
    fontFamily: UI_CONFIG.FONT_FAMILY
  }
}
