export interface SidebarGroup {
    title: string;
    path: string;
    component: any;
    collapsable: boolean;
    children: SidebarGroup[];
}

export interface DocumentationConfiguration {
    title: string;
    description: string;
    sidebar: SidebarGroup[];
}