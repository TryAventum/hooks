/**
 * Internal dependencies
 */
import createAddHook from './createAddHook';
import createRemoveHook from './createRemoveHook';
import createHasHook from './createHasHook';
import createRunHook from './createRunHook';
import createRunHookSync from './createRunHookSync';
import createCurrentHook from './createCurrentHook';
import createDoingHook from './createDoingHook';
import createDidHook from './createDidHook';

/**
 * Returns an instance of the hooks object.
 *
 * @return {Object} Object that contains all hooks.
 */
function createHooks() {
	const actions = Object.create( null );
	const filters = Object.create( null );
	actions.__current = [];
	filters.__current = [];

	return {
		addAction: createAddHook( actions ),
		addFilter: createAddHook( filters ),
		removeAction: createRemoveHook( actions ),
		removeFilter: createRemoveHook( filters ),
		hasAction: createHasHook( actions ),
		hasFilter: createHasHook( filters ),
		removeAllActions: createRemoveHook( actions, true ),
		removeAllFilters: createRemoveHook( filters, true ),
		doAction: createRunHook( actions ),
		doActionSync: createRunHookSync( actions ),
		applyFilters: createRunHook( filters, true ),
		applyFiltersSync: createRunHookSync( filters, true ),
		currentAction: createCurrentHook( actions ),
		currentFilter: createCurrentHook( filters ),
		doingAction: createDoingHook( actions ),
		doingFilter: createDoingHook( filters ),
		didAction: createDidHook( actions ),
		didFilter: createDidHook( filters ),
		actions,
		filters,
	};
}

export default createHooks;
