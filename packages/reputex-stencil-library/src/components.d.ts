/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PendingState {
        "bodyMessage": string;
        "circleRight": string;
        "line": string;
        "mode": boolean;
        "rectangleLeft": string;
        "rectangleMiddle": string;
        "rectangleRight": string;
        "rectangleTop": string;
    }
    interface ReputexWidget {
        "apiAcessKey": string;
        "apiSecretKey": string;
        "mode": boolean;
        "userAddress": string;
        "visibility": boolean;
    }
    interface ScoreLoaded {
        "lastUpdated": string;
        "line": string;
        "maximizeButton": string;
        "mode": boolean;
        "reputeXLogo": string;
        "reputeXScore": number;
        "userAddress": string;
    }
}
declare global {
    interface HTMLPendingStateElement extends Components.PendingState, HTMLStencilElement {
    }
    var HTMLPendingStateElement: {
        prototype: HTMLPendingStateElement;
        new (): HTMLPendingStateElement;
    };
    interface HTMLReputexWidgetElement extends Components.ReputexWidget, HTMLStencilElement {
    }
    var HTMLReputexWidgetElement: {
        prototype: HTMLReputexWidgetElement;
        new (): HTMLReputexWidgetElement;
    };
    interface HTMLScoreLoadedElement extends Components.ScoreLoaded, HTMLStencilElement {
    }
    var HTMLScoreLoadedElement: {
        prototype: HTMLScoreLoadedElement;
        new (): HTMLScoreLoadedElement;
    };
    interface HTMLElementTagNameMap {
        "pending-state": HTMLPendingStateElement;
        "reputex-widget": HTMLReputexWidgetElement;
        "score-loaded": HTMLScoreLoadedElement;
    }
}
declare namespace LocalJSX {
    interface PendingState {
        "bodyMessage"?: string;
        "circleRight"?: string;
        "line"?: string;
        "mode"?: boolean;
        "rectangleLeft"?: string;
        "rectangleMiddle"?: string;
        "rectangleRight"?: string;
        "rectangleTop"?: string;
    }
    interface ReputexWidget {
        "apiAcessKey"?: string;
        "apiSecretKey"?: string;
        "mode"?: boolean;
        "userAddress"?: string;
        "visibility"?: boolean;
    }
    interface ScoreLoaded {
        "lastUpdated"?: string;
        "line"?: string;
        "maximizeButton"?: string;
        "mode"?: boolean;
        "reputeXLogo"?: string;
        "reputeXScore"?: number;
        "userAddress"?: string;
    }
    interface IntrinsicElements {
        "pending-state": PendingState;
        "reputex-widget": ReputexWidget;
        "score-loaded": ScoreLoaded;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pending-state": LocalJSX.PendingState & JSXBase.HTMLAttributes<HTMLPendingStateElement>;
            "reputex-widget": LocalJSX.ReputexWidget & JSXBase.HTMLAttributes<HTMLReputexWidgetElement>;
            "score-loaded": LocalJSX.ScoreLoaded & JSXBase.HTMLAttributes<HTMLScoreLoadedElement>;
        }
    }
}
