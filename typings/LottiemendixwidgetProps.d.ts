/**
 * This file was generated from Lottiemendixwidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface LottiemendixwidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    jsonString?: EditableValue<string>;
    jsonUrl: string;
    loop: boolean;
    width: number;
    height: number;
    triggerStart?: EditableValue<boolean>;
    onMicroflowComplete?: ActionValue;
}

export interface LottiemendixwidgetPreviewProps {
    class: string;
    style: string;
    jsonString: string;
    jsonUrl: string;
    loop: boolean;
    width: number | null;
    height: number | null;
    triggerStart: string;
    onMicroflowComplete: {} | null;
}
