import * as React from "react";
import { ScrollView } from "react-native";
import { Dimension } from "../dependencies/LayoutProvider";
import BaseScrollView, { ScrollEvent, ScrollViewDefaultProps } from "./BaseScrollView";

export interface ScrollComponentProps {
    children?: React.ReactNode;
    onSizeChanged: (dimensions: Dimension) => void;
    onScroll: (offsetX: number, offsetY: number, rawEvent: ScrollEvent) => void;
    onWindowResize: (dimensions: Dimension) => void;
    contentHeight: number;
    contentWidth: number;
    canChangeSize?: boolean;
    externalScrollView?: { new(props: ScrollViewDefaultProps): BaseScrollView };
    isHorizontal?: boolean;
    renderHeader?: () => JSX.Element | JSX.Element[] | null;
    renderFooter?: () => JSX.Element | JSX.Element[] | null;
    scrollThrottle?: number;
    useWindowScroll?: boolean;
    onLayout?: any;
    renderContentContainer?: (props?: object, children?: React.ReactNode) => React.ReactNode | null;
    renderAheadOffset: number;
    layoutSize?: Dimension;
}
export default abstract class BaseScrollComponent extends React.Component<ScrollComponentProps, {}> {
    public abstract scrollTo(x: number, y: number, animate: boolean): void;

    //Override and return node handle to your custom scrollview. Useful if you need to use Animated Events.
    public getScrollableNode(): number | null {
        return null;
    }

    //Override and return ref to your custom scrollview. Useful if you need to use Animated Events on the new architecture.
    public getNativeScrollRef(): ScrollView | null {
        return null;
    }
}
