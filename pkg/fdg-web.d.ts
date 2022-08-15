/* tslint:disable */
/* eslint-disable */
/**
*/
export function start(): void;
/**
*/
export class ForceGraphEdge {
  free(): void;
/**
*/
  readonly metadata: any;
/**
*/
  readonly source: string;
/**
*/
  readonly target: string;
}
/**
*/
export class ForceGraphNode {
  free(): void;
/**
*/
  readonly location: (number)[];
/**
*/
  readonly metadata: any;
/**
*/
  readonly name: string;
}
/**
*/
export class ForceGraphSimulator {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} name
* @param {any} weight
* @returns {number}
*/
  addNode(name: string, weight: any): number;
/**
* @param {any} source
* @param {any} target
* @param {any} weight
*/
  addEdge(source: any, target: any, weight: any): void;
/**
*/
  resetNodePlacement(): void;
/**
* @param {number} dimensions
*/
  setDimensions(dimensions: number): void;
/**
* @param {Float32Array} query
* @param {number} radius
* @returns {any}
*/
  find(query: Float32Array, radius: number): any;
/**
* @param {string} name
* @returns {Float32Array | undefined}
*/
  location_from_name(name: string): Float32Array | undefined;
/**
* @param {number} dt
*/
  update(dt: number): void;
/**
* @param {string} name
* @param {Float32Array} location
*/
  setNodeLocationFromName(name: string, location: Float32Array): void;
/**
*/
  readonly edges: Array<any>;
/**
*/
  graph: any;
/**
*/
  readonly nodes: Array<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_forcegraphedge_free: (a: number) => void;
  readonly forcegraphedge_source: (a: number, b: number) => void;
  readonly forcegraphedge_target: (a: number, b: number) => void;
  readonly forcegraphedge_metadata: (a: number) => number;
  readonly start: () => void;
  readonly __wbg_forcegraphsimulator_free: (a: number) => void;
  readonly forcegraphsimulator_new: () => number;
  readonly forcegraphsimulator_set_graph: (a: number, b: number, c: number) => void;
  readonly forcegraphsimulator_graph: (a: number, b: number) => void;
  readonly forcegraphsimulator_addNode: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly forcegraphsimulator_nodes: (a: number) => number;
  readonly forcegraphsimulator_addEdge: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly forcegraphsimulator_edges: (a: number) => number;
  readonly forcegraphsimulator_resetNodePlacement: (a: number) => void;
  readonly forcegraphsimulator_setDimensions: (a: number, b: number) => void;
  readonly forcegraphsimulator_find: (a: number, b: number, c: number, d: number) => number;
  readonly forcegraphsimulator_location_from_name: (a: number, b: number, c: number, d: number) => void;
  readonly forcegraphsimulator_update: (a: number, b: number) => void;
  readonly forcegraphsimulator_setNodeLocationFromName: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_forcegraphnode_free: (a: number) => void;
  readonly forcegraphnode_name: (a: number, b: number) => void;
  readonly forcegraphnode_location: (a: number, b: number) => void;
  readonly forcegraphnode_metadata: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
* Synchronously compiles the given `bytes` and instantiates the WebAssembly module.
*
* @param {BufferSource} bytes
*
* @returns {InitOutput}
*/
export function initSync(bytes: BufferSource): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
