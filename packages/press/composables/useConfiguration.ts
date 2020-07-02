import { inject } from 'vue';
import { KroPressPluginOptions } from '../types/options.interface';

export const ConfigurationSymbol = Symbol();

export const useConfiguration = () : KroPressPluginOptions => {
    const config = inject<KroPressPluginOptions>(ConfigurationSymbol);
    
    return config as KroPressPluginOptions;
}