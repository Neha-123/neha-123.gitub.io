import { size } from "./size"; 
export const device = { 
    mobileS: `@media (min-width: ${size.mobileS})`, 
    mobileM: `@media (min-width: ${size.mobileM})`, 
    mobileL: `@media (min-width: ${size.mobileL})`, 
    tablet: `@media (min-width: ${size.tablet})`, 
    laptop: `@media (min-width: ${size.laptop})`, 
    laptopL: `@media (min-width: ${size.laptopL})`, 
    desktop: `@media (min-width: ${size.desktop})`, 
    desktopL: `@media (min-width: ${size.desktop})`
};