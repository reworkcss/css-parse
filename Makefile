
test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec \
		--bail

bench:
	@./node_modules/.bin/matcha

.PHONY: test bench
