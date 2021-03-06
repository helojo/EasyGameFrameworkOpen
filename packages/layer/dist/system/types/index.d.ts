declare module '@ailhc/layer/src/layer-interfaces' {
	 global {
	    namespace egf {
	        type LayerClassType = new () => ILayer;
	        interface ILayer {
	            layerType: number;
	            layerName: string;
	            onInit(layerName: string, layerType: number, layerMgr: ILayerMgr): void;
	            /**
	             * 当被添加到根节点时
	             * @param root
	             */
	            onAdd(root: any): void;
	            /**
	             * 当隐藏时
	             */
	            onHide(): void;
	            /**
	             * 当显示时
	             */
	            onShow(): void;
	            /**
	             * 当销毁时
	             */
	            onDestroy?(): void;
	            /**
	             * 当有节点添加时
	             * @param node
	             */
	            onNodeAdd(node: any): void;
	        }
	        interface ILayerMgr<T = any> {
	            /**
	             * 层级字典
	             */
	            layerMap: Map<number, egf.ILayer>;
	            /**
	             * 层级管理根节点
	             */
	            root: T;
	            /**
	             * 初始化层级
	             * @param root 层级根节点
	             * @param layerEnum 层级枚举
	             * @param defaultType 默认层级处理类
	             * @param typeMap 自定义层级处理类字典
	             */
	            init(root: T, layerEnum: any, defaultType: LayerClassType, typeMap?: Map<string, LayerClassType>): void;
	            /**
	             * 添加层级
	             * @param layer 层级对象
	             */
	            addLayer(layer: egf.ILayer): boolean;
	            /**
	             * 移除层级
	             * @param layerType 层级类型
	             */
	            removeLayer(layerType: number): boolean;
	            /**
	             * 隐藏指定层级
	             * @param layerType
	             */
	            hideLayer(layerType: number): void;
	            /**
	             * 显示指定层级
	             * @param layerType
	             */
	            showLayer(layerType: number): void;
	            /**
	             * 添加渲染节点到层级
	             * @param node
	             * @param layerType
	             */
	            addNodeToLayer(node: T, layerType: number): void;
	            /**
	             * 获取层级
	             * @param layerType
	             */
	            getLayerByType<K extends egf.ILayer>(layerType: number): K;
	        }
	    }
	}
	export interface LayerInterfaces {
	}

}
declare module '@ailhc/layer/src/layer-mgr' {
	 type LayerClassType = egf.LayerClassType;
	export class LayerMgr<T> implements egf.ILayerMgr<T> {
	    protected layerEnum: any;
	    protected classMap: Map<string, LayerClassType>;
	    protected defaultType: LayerClassType;
	    protected _layerMap: Map<number, egf.ILayer | any>;
	    private _root;
	    init(root: T, layerEnum: any, defaultClass: LayerClassType, classMap?: Map<string, LayerClassType>): void;
	    get root(): T;
	    get layerMap(): Map<number, egf.ILayer | any>;
	    addLayer(layer: egf.ILayer): boolean;
	    removeLayer(layerType: number): boolean;
	    hideLayer(layerType: number): void;
	    showLayer(layerType: number): void;
	    addNodeToLayer(node: T, layerType: number): void;
	    getLayerByType<T extends egf.ILayer>(layerType: number): T;
	}
	export {};

}
declare module '@ailhc/layer' {
	export * from '@ailhc/layer/src/layer-interfaces';
	export * from '@ailhc/layer/src/layer-mgr';

}
