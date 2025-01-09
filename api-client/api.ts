/* tslint:disable */
/* eslint-disable */
/**
 * Todo API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface Def0
 */
export interface Def0 {
    /**
     * 
     * @type {number}
     * @memberof Def0
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Def0
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface Def1
 */
export interface Def1 {
    /**
     * 
     * @type {number}
     * @memberof Def1
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof Def1
     */
    'listId': number;
    /**
     * 
     * @type {string}
     * @memberof Def1
     */
    'name': string;
    /**
     * 
     * @type {Def4}
     * @memberof Def1
     */
    'status': Def4;
}


/**
 * 
 * @export
 * @interface Def2
 */
export interface Def2 {
    /**
     * 
     * @type {string}
     * @memberof Def2
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface Def3
 */
export interface Def3 {
    /**
     * 
     * @type {string}
     * @memberof Def3
     */
    'name': string;
    /**
     * 
     * @type {Def4}
     * @memberof Def3
     */
    'status': Def4;
}


/**
 * 
 * @export
 * @enum {string}
 */

export const Def4 = {
    Pending: 'PENDING',
    InProgress: 'IN-PROGRESS',
    Done: 'DONE'
} as const;

export type Def4 = typeof Def4[keyof typeof Def4];


/**
 * 
 * @export
 * @interface Def5
 */
export interface Def5 {
    /**
     * 
     * @type {string}
     * @memberof Def5
     */
    'message'?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rootGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rootGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.rootGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.rootGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public rootGet(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).rootGet(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ItemsApi - axios parameter creator
 * @export
 */
export const ItemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all items from a list
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsGet: async (listId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('listsListIdItemsGet', 'listId', listId)
            const localVarPath = `/lists/{listId}/items`
                .replace(`{${"listId"}}`, encodeURIComponent(String(listId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an item from a list
         * @param {string} listId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsIdDelete: async (listId: string, id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('listsListIdItemsIdDelete', 'listId', listId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listsListIdItemsIdDelete', 'id', id)
            const localVarPath = `/lists/{listId}/items/{id}`
                .replace(`{${"listId"}}`, encodeURIComponent(String(listId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an item
         * @param {string} listId 
         * @param {string} id 
         * @param {Def3} [def3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsIdPut: async (listId: string, id: string, def3?: Def3, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('listsListIdItemsIdPut', 'listId', listId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('listsListIdItemsIdPut', 'id', id)
            const localVarPath = `/lists/{listId}/items/{id}`
                .replace(`{${"listId"}}`, encodeURIComponent(String(listId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(def3, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Add an item to a list
         * @param {string} listId 
         * @param {Def3} [def3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsPost: async (listId: string, def3?: Def3, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('listsListIdItemsPost', 'listId', listId)
            const localVarPath = `/lists/{listId}/items`
                .replace(`{${"listId"}}`, encodeURIComponent(String(listId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(def3, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemsApi - functional programming interface
 * @export
 */
export const ItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get all items from a list
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsListIdItemsGet(listId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Def1>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsListIdItemsGet(listId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemsApi.listsListIdItemsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete an item from a list
         * @param {string} listId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsListIdItemsIdDelete(listId: string, id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Def1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsListIdItemsIdDelete(listId, id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemsApi.listsListIdItemsIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update an item
         * @param {string} listId 
         * @param {string} id 
         * @param {Def3} [def3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsListIdItemsIdPut(listId: string, id: string, def3?: Def3, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Def1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsListIdItemsIdPut(listId, id, def3, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemsApi.listsListIdItemsIdPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Add an item to a list
         * @param {string} listId 
         * @param {Def3} [def3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsListIdItemsPost(listId: string, def3?: Def3, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Def1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsListIdItemsPost(listId, def3, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemsApi.listsListIdItemsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ItemsApi - factory interface
 * @export
 */
export const ItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get all items from a list
         * @param {string} listId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsGet(listId: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Def1>> {
            return localVarFp.listsListIdItemsGet(listId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an item from a list
         * @param {string} listId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsIdDelete(listId: string, id: string, options?: RawAxiosRequestConfig): AxiosPromise<Def1> {
            return localVarFp.listsListIdItemsIdDelete(listId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an item
         * @param {string} listId 
         * @param {string} id 
         * @param {Def3} [def3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsIdPut(listId: string, id: string, def3?: Def3, options?: RawAxiosRequestConfig): AxiosPromise<Def1> {
            return localVarFp.listsListIdItemsIdPut(listId, id, def3, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Add an item to a list
         * @param {string} listId 
         * @param {Def3} [def3] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdItemsPost(listId: string, def3?: Def3, options?: RawAxiosRequestConfig): AxiosPromise<Def1> {
            return localVarFp.listsListIdItemsPost(listId, def3, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
export class ItemsApi extends BaseAPI {
    /**
     * 
     * @summary Get all items from a list
     * @param {string} listId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public listsListIdItemsGet(listId: string, options?: RawAxiosRequestConfig) {
        return ItemsApiFp(this.configuration).listsListIdItemsGet(listId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an item from a list
     * @param {string} listId 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public listsListIdItemsIdDelete(listId: string, id: string, options?: RawAxiosRequestConfig) {
        return ItemsApiFp(this.configuration).listsListIdItemsIdDelete(listId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an item
     * @param {string} listId 
     * @param {string} id 
     * @param {Def3} [def3] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public listsListIdItemsIdPut(listId: string, id: string, def3?: Def3, options?: RawAxiosRequestConfig) {
        return ItemsApiFp(this.configuration).listsListIdItemsIdPut(listId, id, def3, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Add an item to a list
     * @param {string} listId 
     * @param {Def3} [def3] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemsApi
     */
    public listsListIdItemsPost(listId: string, def3?: Def3, options?: RawAxiosRequestConfig) {
        return ItemsApiFp(this.configuration).listsListIdItemsPost(listId, def3, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ListsApi - axios parameter creator
 * @export
 */
export const ListsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary List all the lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/lists/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a list
         * @param {string} listId 
         * @param {Def2} [def2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdPut: async (listId: string, def2?: Def2, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('listsListIdPut', 'listId', listId)
            const localVarPath = `/lists/{listId}`
                .replace(`{${"listId"}}`, encodeURIComponent(String(listId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(def2, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Add a new list
         * @param {Def2} [def2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsPost: async (def2?: Def2, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/lists/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(def2, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListsApi - functional programming interface
 * @export
 */
export const ListsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ListsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary List all the lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Def0>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListsApi.listsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a list
         * @param {string} listId 
         * @param {Def2} [def2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsListIdPut(listId: string, def2?: Def2, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Def0>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsListIdPut(listId, def2, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListsApi.listsListIdPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Add a new list
         * @param {Def2} [def2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsPost(def2?: Def2, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Def0>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsPost(def2, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListsApi.listsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ListsApi - factory interface
 * @export
 */
export const ListsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ListsApiFp(configuration)
    return {
        /**
         * 
         * @summary List all the lists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<Def0>> {
            return localVarFp.listsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a list
         * @param {string} listId 
         * @param {Def2} [def2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsListIdPut(listId: string, def2?: Def2, options?: RawAxiosRequestConfig): AxiosPromise<Def0> {
            return localVarFp.listsListIdPut(listId, def2, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Add a new list
         * @param {Def2} [def2] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsPost(def2?: Def2, options?: RawAxiosRequestConfig): AxiosPromise<Def0> {
            return localVarFp.listsPost(def2, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ListsApi - object-oriented interface
 * @export
 * @class ListsApi
 * @extends {BaseAPI}
 */
export class ListsApi extends BaseAPI {
    /**
     * 
     * @summary List all the lists
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsGet(options?: RawAxiosRequestConfig) {
        return ListsApiFp(this.configuration).listsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a list
     * @param {string} listId 
     * @param {Def2} [def2] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsListIdPut(listId: string, def2?: Def2, options?: RawAxiosRequestConfig) {
        return ListsApiFp(this.configuration).listsListIdPut(listId, def2, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Add a new list
     * @param {Def2} [def2] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsPost(def2?: Def2, options?: RawAxiosRequestConfig) {
        return ListsApiFp(this.configuration).listsPost(def2, options).then((request) => request(this.axios, this.basePath));
    }
}


