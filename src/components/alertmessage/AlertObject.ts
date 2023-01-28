import type { BootstrapType } from "../bootstraptype/BootstrapType";

export function getTimeout(): number {
    try {
        return parseInt(localStorage.getItem("alert-timeout"));
    } catch (e) {
        return 0;
    }
}

export type AlertObject = {
    type: BootstrapType;
    icon: string;
    message: string;
    timeout?: number;
};
