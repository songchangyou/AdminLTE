/**
 * 定义未提供typescript定义文件的第三方js库
 */
declare namespace enquirejs {
    interface MediaQueryOptions {
        /**
         * fired when query matched
         */
        match?: () => void;
        /**
         * fired when a query is no longer matched
         */
        unmatch?: () => void;
        /**
         * fired when handler first triggered
         */
        setup?: () => void;
        /**
         * whether setup should be run immediately or deferred until query is first matched
         */
        deferSetup?: boolean;
    }
    /**
     * Delegate to handle a media query being matched and unmatched.
     */
    interface QueryHandler {
        /**
         * Delegate to handle a media query being matched and unmatched.
         *
         * @param {MediaQueryOptions} options
         * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
         */
        (options: MediaQueryOptions): this;
        /**
         * coordinates setup of the handler
         *
         *
         * @memberOf QueryHandlerOptions
         */
        setup(): void;
        /**
         * coordinates setup and triggering of the handler
         *
         *
         * @memberOf QueryHandlerOptions
         */
        on(): void;
        /**
         * coordinates the unmatch event for the handler
         *
         *
         * @memberOf QueryHandlerOptions
         */
        off(): void;
        /**
         * called when a handler is to be destroyed.
         * delegates to the destroy or unmatch callbacks, depending on availability.
         *
         *
         * @memberOf QueryHandlerOptions
         */
        destroy(): void;
        /**
         * determines equality by reference.
         * if object is supplied compare options, if function, compare match callback
         *
         *
         * @memberOf QueryHandlerOptions
         */
        equals(): void;
    }
    /**
     * Represents a single media query, manages it's state and registered handlers for this query
     */
    interface MediaQuery {
        /**
         * Represents a single media query, manages it's state and registered handlers for this query
         *
         * @constructor
         * @param {string} query the media query string
         * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
         */
        (query: string, isUnconditional: boolean): this;
        /**
         * add a handler for this query, triggering if already active
         *
         * @param {MediaQueryOptions} handler
         */
        addHandler(handler: MediaQueryOptions): void;
        /**
         * removes the given handler from the collection, and calls it's destroy methods
         *
         * @param {MediaQueryOptions} handler the handler to remove
         */
        removeHandler(handler: MediaQueryOptions): void;
        /**
         * Determine whether the media query should be considered a match
         *
         * @return {Boolean} true if media query can be considered a match, false otherwise
         */
        matches(): boolean;
        /**
         * Clears all handlers and unbinds events
         */
        clear(): void;
        assess(): void;
    }
    /**
     * Allows for registration of query handlers.
     * Manages the query handler's state and is responsible for wiring up browser events
     *
     * @constructor
     */
    interface MediaQueryDispatch {
        /**
         * Registers a handler for the given media query
         *
         * @param {string} q the media query
         * @param {MediaQueryOptions} options either a single query handler object, a function, or an array of query handlers
         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
         */
        register(q: string, options: MediaQueryOptions, shouldDegrade?: boolean): this;
        /**
         * unregisters a query and all it's handlers, or a specific handler for a query
         *
         * @param {string} q the media query to target
         * @param {MediaQueryOptionss} [handler] specific handler to unregister
         */
        unregister(q: string, handler: MediaQueryOptions): this;
    }
}
declare var enquire: enquirejs.MediaQueryDispatch;
