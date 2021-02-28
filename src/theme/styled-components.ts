import * as styledComponents from 'styled-components';

import { TTheme } from 'theme/theme';

const {
    default: styled,
    ThemeProvider,
    useTheme
} = styledComponents as styledComponents.ThemedStyledComponentsModule<TTheme>;

export { ThemeProvider, useTheme };
export default styled;