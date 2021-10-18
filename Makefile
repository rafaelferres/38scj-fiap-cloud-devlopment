branch=$(shell git rev-parse --abbrev-ref HEAD)
ifeq ($(branch), dev)
branch="dev"
endif
ifeq ($(branch), main)
branch="prod"
endif

remove:
	export AWS_PROFILE=anymals; export SLS_DEBUG=*;sls remove

deploy:
	export AWS_PROFILE=anymals; export SLS_DEBUG=*;sls deploy -v -s $(branch)