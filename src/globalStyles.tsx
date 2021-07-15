import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* ======================== RESET ======================== */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
  border-spacing: 0;
}
/* ======================================================= */

:root {
  /* Colors */
  --main-accent: #5C326B;
  --dark-background: #272727;
  --lighter-background: #363636;
  --button-color: #464646;
  --contrasting-text-color: #F5F5F5;
  --dimmer-text-color: #DFDFDF;
  --fretboard-color: #FFE291;
  --string-color: #464646;
  --nut-color: #F5F5F5;
  --fret-color: #B4B4B4;
  --fret-marker-color: #B4B4B4;

  /* Shadows */
  --main-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.2);
  --svg-shadow: 5px 5px 13px rgba(0, 0, 0, 0.2);

  --left-right-page-padding: 2rem;

  /* Breakpoints */
  /* TODO Turns out css variables dont work
     in media queries... */
  --large-phone: 600px;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

sup { 
  vertical-align: top;
  font-size: 0.7em;
}

b {
  font-weight: bold;
}

body {
  color: var(--dimmer-text-color);
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--dark-background);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--contrasting-text-color);
  font-weight: bold;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.2rem;
}
`;
