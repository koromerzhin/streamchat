include make/general/Makefile
STACK   := streamchat
NETWORK := proxynetwork
include make/docker/Makefile

COMMANDS_SUPPORTED_COMMANDS := linter
COMMANDS_SUPPORTS_MAKE_ARGS := $(findstring $(firstword $(MAKECMDGOALS)), $(COMMANDS_SUPPORTED_COMMANDS))
ifneq "$(COMMANDS_SUPPORTS_MAKE_ARGS)" ""
  COMMANDS_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(COMMANDS_ARGS):;@:)
endif

install: node_modules ## Installation application
	@make docker image-pull -i
	@make docker deploy -i

linter: node_modules ## Scripts Linter *
ifeq ($(COMMAND_ARGS),all)
	@make linter readme -i
else ifeq ($(COMMAND_ARGS),readme)
	@npm run linter-markdown README.md
else
	@echo "ARGUMENT missing"
	@echo "---"
	@echo "make linter ARGUMENT"
	@echo "---"
	@echo "all: ## Launch all linter"
	@echo "readme: linter README.md"
endif