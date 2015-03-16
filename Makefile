BIN = ./node_modules/.bin
SRC = $(wildcard src/*.js.coffee)
LIB = $(SRC:src/%.js.coffee=lib/%.js)

build: $(LIB)
lib/%.js: src/%.js.coffee
	@mkdir -p $(@D)
	@$(BIN)/coffee -co lib/ src/
    
test: build
  
clean: 
	@rm -rf lib
    
install link: @npm $@
    
release-patch: build test
	@$(call release,patch)

release-minor: build test
	@$(call release,minor)

release-major: build test
	@$(call release,major)

publish:
	git push --tags origin HEAD:master
	npm publish

define release
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)')"` && \
  node -e "\
  	var j = require('./package.json');\
  	j.version = \"$$NEXT_VERSION\";\
  	var s = JSON.stringify(j, null, 2);\
  	require('fs').writeFileSync('./package.json', s);" && \
  git commit -m "release $$NEXT_VERSION" -- package.json && \
  git tag "$$NEXT_VERSION" -m "release $$NEXT_VERSION"
endef
