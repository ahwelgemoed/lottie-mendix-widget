import { Component, ReactNode, createElement } from "react";
import { LottiemendixwidgetPreviewProps } from "../typings/LottiemendixwidgetProps";

declare function require(name: string): string;

export class preview extends Component<LottiemendixwidgetPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/Lottiemendixwidget.css");
}
