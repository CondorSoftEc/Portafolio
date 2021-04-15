export interface Theme {
    sidenav : SidenavTheme,
    base: BaseTheme,
    surface: BaseTheme
}

interface BaseTheme {
    color: string,
    background: string,
    divider: string //color complementario util para los mat-dividers
}

interface SidenavTheme{
    type : string,
    color : string
}