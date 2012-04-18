mergeInto(LibraryManager.library, {
    rust_start: function(main_fn, argc, argv, crate_map) {
	// FIXME: Create args vector
	// FIXME: Setup logging
	var main = FUNCTION_TABLE[main_fn];
	main();
    }
});