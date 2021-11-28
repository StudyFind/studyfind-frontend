import { RouteComponentProps } from "react-router-dom";

export type ColorScheme =
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "cyan"
  | "purple"
  | "pink";

export type Side = "RESEARCHER" | "PARTICIPANT";

export interface Option {
  label: string;
  value: string;
}

export interface Tab {
  name: string;
  link: string;
  icon?: React.ReactElement;
  content: React.ReactNode;
}

export type ButtonClickEventHandler = () => void;
export type InputChangeEventHandler<T> = (name: string, value: T) => void;

export type ImageImport = string;
export type ExternalLink = string;
export type InternalLink = string;

export interface RouteData {
  path: InternalLink;
  component:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, any, unknown>>
    | undefined;
}

export interface Toast {
  title: React.ReactNode;
  description: React.ReactNode;
  status: "info" | "warning" | "success" | "error";
  duration: number;
  isClosable: boolean;
  position:
    | "top"
    | "bottom"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}
