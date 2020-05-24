type SidebarLink = [string, string];

interface SidebarGroup {
    title: string;
    path: string;
    collapsable: boolean;
    children: string[] | SidebarLink;
}

export interface DocumentationConfiguration {
    title: string;
    description: string;
    sidebar: string[] | SidebarLink | SidebarGroup;
}