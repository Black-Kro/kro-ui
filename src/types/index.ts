export interface ComponentProp {
  name: string
  description: string
  type: string
  values: string[] | string
  default: string
}

export interface ComponentEvent {
  name: string
  description: string
  parameters: string[]
}

export interface ComponentSlots {
  name: string
  description: string
  props: string[]
}

export interface ComponentCSSProperties {
  name: string
  description: string
  type: string
  default: string
}

export interface ComponentMetadata {
  title: String
  description: string
  props?: ComponentProp[]
  events?: ComponentEvent[]
  slots?: ComponentSlots[]
  css?: ComponentCSSProperties[]
}
