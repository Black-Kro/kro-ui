import { RouteRecordRaw } from 'vue-router';
import { Component } from 'vue';

export interface KroPressPluginSidebarOptions {
    title: String;
    to: String,
    children?: KroPressPluginSidebarOptions[],
};

export interface KroPressPluginOptions {
    title: String;
    components?: {
        [key: string]: Component;
    }
    routes: RouteRecordRaw[];
    sidebar: KroPressPluginSidebarOptions[]; 
};
