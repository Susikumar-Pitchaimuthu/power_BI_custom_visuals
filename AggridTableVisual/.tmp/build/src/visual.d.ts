import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import FormattingModel = powerbi.visuals.FormattingModel;
import "../style/visual.less";
export declare class Visual implements IVisual {
    private target;
    private formattingSettings;
    private formattingSettingsService;
    helpLinkElement: Element;
    private tableVisual;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    getFormattingModel(): FormattingModel;
    private createHelpLinkElement;
    private render;
}
